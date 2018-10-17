// so we can use environment variables from a .env file
// into process.env
require('dotenv').config()

//import express
const express = require('express');
// initialize the app
const app = express();

const logger = require('morgan');

//  body-parser captures data coming via a form.  body-parse parses
//  incoming request bodies in a middleware before your handlers, available
//  under the req.body property. (TLDR: allows our forms to work)
const bodyParser = require('body-parser');

const axios = require('axios');

// set the port, either from an environmental variable or manually
const port = process.env.PORT || 8000;



app.use(bodyParser.json());


// **********************************
// index route
// **********************************
app.get('/', (req, res, next) => {
res.send(`Hello world, let's steal some art.`)
})



// **********************************
// axios call - works but not loading
// **********************************
// let axiosCall = () => {
// axios.get("https://api.openweathermap.org/data/2.5/weather?zip=11231&units=imperial&appid=fb1d469d46d8692c83f7c5a6183ad373")
//   .then(response => {
//     console.log(response.data);
//     console.log("Hey there from inside the axios call")
//   })
//   .catch(error => {
//     console.log(error);
//   });
// }

let axiosCall = () => {
  axios.get("https://www.brooklynmuseum.org/api/v2/archive/image/",
    {headers: {
      api_key: process.env.API_KEY
    }
    }
  )
  .then(response => {
    console.log(response.data);
    console.log("Hey there from inside the axios call")
  })
  .catch(error => {
    console.log(error);
  });
}

// **********************************
// API Route
// **********************************
app.get('/api', axiosCall, (req, res, err, next) => {
  console.log("hey there")
})


















// **********************************
// API Route
// **********************************

// app.get('/api', axiosCall, (req, res, next) => {
//   console.log(`Hello Api`)
//   res.send({
//     imagelink: res.locals.imagelink
//   })
// })

// function axiosCall() {
//   axios.get('https://www.brooklynmuseum.org/api/v2/archive/image/', {
//    headers: {api_key: process.env.API_KEY}
//   })
//   .then(function (response) {
//     console.log(response)
//     getArtData(response)
//   })
//   .catch(function (error) {
//     console.log("error:", error)
//   })
// }

// function getArtData(res) {
//   let imagelink = res.data.largest_derivative_url
//   console.log(imagelink)
// }

// app.get('/api', () => {

// })




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


module.exports = app;
