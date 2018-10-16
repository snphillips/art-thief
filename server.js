// so we can use environment variables from a .env file
// into process.env
require('dotenv').config()


//import express
const express = require('express');


const logger = require('morgan');

// initialize the app
const app = express();

//  body-parser is an npm plugin for Express that we need to use in order
//  to be able to capture data coming via a form. Express used to have this
//  functionality built-in but in order to achieve easier maintenance
//  body-parser has been removed from the core of Express. body-parse parses
//  incoming request bodies in a middleware before your handlers, available
//  under the req.body property. (TLDR: makes our forms work)
const bodyParser = require('body-parser');

// set the port, either from an environmental variable or manually
const port = process.env.PORT || 8000;


// All your routes are in there
const routes = require('./routes');

// **********************************
// app.uses
// **********************************
// app.use(cors())
app.use(bodyParser.json());
app.use('/', routes);




// index route
app.get('/', (req, res, next) => {
res.send(`Hello world, let's steal some art. The api key is: ${process.env.API_KEY}`)
})


// **********************************
// Error Handlers
// **********************************
app.use((err, req, res, next) => {
  res.json(err);
  res.status(500).send('Oh no a 500 error.')
});

app.use((req, res, next) => {
  res.status(404).send(`Oh no a 404 error. I can't find.`)
})



// tell the app where to serve

app.listen(port, () => {
  console.log(`Let's steal some art! Listening on port: ${port}, in ${app.get('env')} mode.`);
}).on('error', console.error);



module.exports = app;
