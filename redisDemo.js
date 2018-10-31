// redisDemo.js
var redis = require('redis');
var client = redis.createClient(); // this creates a new client





// Now, we want to listen for the connect event to see whether we
// successfully connected to the redis-server. We can check for a
// successful connection like this.

client.on('connect', function() {
    console.log('Redis client connected');
});


client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});


client.set('testkey', 'my test value', redis.print);
client.get('testkey', function (error, result) {
    if (error) {
        console.log("Oh no! An error.", error);
        throw error;
    }
    console.log('GET result ->' + result);
});
