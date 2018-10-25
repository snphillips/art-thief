// so we can use environment variables from a .env file
// into process.env
require('dotenv').config()

//import express
const express = require('express');
// initialize the app
const app = express();

const logger = require('morgan');


// **********************************
// CORS
// npm package to allow cross origin resource sharing
// **********************************
const cors = require('cors')
app.use(cors())

// Body-parser captures data coming via a form.
// Allows our forms to work)
const bodyParser = require('body-parser');

const axios = require('axios');

// set the port, either from an environmental variable or manually
const port = process.env.PORT || 8000;



// **********************************
// index route
// **********************************
app.get('/', (req, res, next) => {
  res.send(`Hello world, let's steal some art.`)
})


// **********************************
// Get All - Search by Tag
// **********************************
app.get('/searchbytag/:value', (req, res, next) => {
  const { value } = req.params;

  axios.get(`https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.search.objects&access_token=${process.env.COOPER_API_TOKEN}&has_images=1&per_page=300&tag=${value}`)
  .then((response) => {
    return res.json(response.data)
    console.log("tag value is:", value)
    console.log("response length:", response.data.objects.length)
  })
  .catch((error) => {
    console.log(error)
  });
});


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


app.use(bodyParser.json());

// **********************************
// Port
// **********************************
app.listen(port, () => {
  console.log(`Let's steal some art! Listening on port: ${port}, in ${app.get('env')} mode.`);
}).on('error', console.error);



module.exports = app;
