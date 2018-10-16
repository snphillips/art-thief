//import express
const express = require('express');

// initialize the app
const app = express();

// set the port, either from an environmental variable or manually
const port = process.env.PORT || 3000;




// tell the app where to serve
app.listen(port, () => {
  console.log(`Let's steal art! Listening on port ${port}`);
})
