// so we can use environment variables from a .env file
// into process.env
require('dotenv').config()


//import express
const express = require('express');


const logger = require('morgan');

// initialize the app
const app = express();

// set the port, either from an environmental variable or manually
const port = process.env.PORT || 8000;





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
  res.status(404).send(`Oh no a 404 error. I can't find that.`)
})















// tell the app where to serve

app.listen(port, () => {
  console.log(`Let's steal some art! Listening on port: ${port}, in ${app.get('env')} mode.`);
}).on('error', console.error);








module.exports = app;
