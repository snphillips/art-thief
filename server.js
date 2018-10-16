// so we can use environment variables from a .env file
// into process.env
require('dotenv').config()

//import express
const express = require('express');
// initialize the app
const app = express();

const logger = require('morgan');

//  body-parser is an npm plugin for Express that we need to use in order
//  to be able to capture data coming via a form. Express used to have this
//  functionality built-in but in order to achieve easier maintenance
//  body-parser has been removed from the core of Express. body-parse parses
//  incoming request bodies in a middleware before your handlers, available
//  under the req.body property. (TLDR: makes our forms work)
const bodyParser = require('body-parser');

// set the port, either from an environmental variable or manually
const port = process.env.PORT || 8000;



app.use(bodyParser.json());


// **********************************
// Index Route
// **********************************
app.get('/', (req, res, next) => {
res.send(`Hello world, let's steal some art.`)
})

// **********************************
// API Route
// **********************************
app.get('/api', axiosCall, (req, res, next) => {
  console.log(`Hello Api`)
  res.send({
    imagelink: res.locals.imagelink
  })
})

function axiosCall() {
  axios.get('https://www.brooklynmuseum.org/api/v2/archive/image/', {
   headers: {
     api_key: process.env.API_KEY
   }
  }).then((response) => {
    return response.json()
  })
  .then((response => {
    getArtData(response)
    console.log(response)
  })
  .catch((error) => {
    console.log("error:", error)
  }))

}

function getArtData(res) {
  let imagelink = res.data.largest_derivative_url
  console.log(imagelink)
}



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


// **********************************
// Hello there
// **********************************
app.listen(port, () => {
  console.log(`Let's steal some art! Listening on port: ${port}, in ${app.get('env')} mode.`);
}).on('error', console.error);


// **********************************
// Allow CORS
// **********************************
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin,Content-Type, Authorization, x-id, Content-Length, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});



// **********************************
// What's this
// **********************************
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        error: err,
        message: err.message,
    });
});











module.exports = app;
