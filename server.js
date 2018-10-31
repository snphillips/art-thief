// so we can use environment variables from a .env file
// into process.env
require('dotenv').config()

//import express
const express = require('express');
// initialize the app
const app = express();

const logger = require('morgan');

const axios = require('axios');

// **********************************
// Redis & Response-time
// npm packages
// **********************************
// const responseTime = require('response-time')
var redis = require("redis"),
    // local hosting
    // client = redis.createClient();
    // Heroku hosting
    client = require('redis').createClient(process.env.REDIS_URL);


// **********************************
// CORS
// npm package to allow cross origin resource sharing
// **********************************
const cors = require('cors')
app.use(cors())

// Body-parser captures data coming via a form.
// Allows our forms to work)
const bodyParser = require('body-parser');


// set the port, either from an environmental variable or manually
const port = process.env.PORT || 8888;



// **********************************
// index route
// **********************************
app.get('/', (req, res, next) => {
  res.send(`Hello world, let's steal some art.`)
})


// **********************************
// Get All - Search by Tag Redis
// **********************************

const getItemBySearchTag = (req, res) => {
  let { value } = req.params;
  let url = `https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.search.objects&access_token=${process.env.COOPER_API_TOKEN}&has_images=1&per_page=200&tag=${value}`

  return axios.get(url)

    .then((response) => {
      console.log(`I have`, response.data.objects.length, `items for the keyword`, value, `.`)
        // SETEX is a redis command. It has 3 parameters: "key, seconds, value"
        // 1) key: Set the string-key:value in the cache.
        // 2) seconds: Set set key to timeout after a given number of seconds (cache expiration) to 1 hour (60 minutes)
        // 3600 = 1hr
        // 3) value: The response as JSON
        client.setex(req.params.value, 172800, JSON.stringify(response.data));

      return res.json(response.data)
    })
    .catch((error) => {
      console.log(error)
      res.send(`I cant' find any items right now.`);
    });
  }

const getCache = (req, res) => {

  //Check the cache data from the server redis
  client.get(req.params.value, (err, result) => {
    if (result) {
      res.send(result);
      console.log(`I have that search value in my redis cache, I've sent you the result.`)
    } else {
      getItemBySearchTag(req, res);
      console.log(`This search term insn't in my cache yet. Let me work on finding the result.`)
    }
  });
}

app.get('/searchbytag/:value', getCache);



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
// Middleware that adds a X-Response-Time
// header to responses. --can't find at the moment
// **********************************
// app.use(responseTime());

// **********************************
// Port
// **********************************
app.listen(port, () => {
  console.log(`Let's steal some art! Listening on port: ${port}, in ${app.get('env')} mode.`);
}).on('error', console.error);



module.exports = app;
