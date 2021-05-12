const http = require("http");

const express = require('express');

const app = express();

/* Node Js runs non-blocking JS code and uses an event-driven approach for running logic in code.
   A standard node program exits as soon as there is no more work to do
   The createServer() event never finishes by default
   Event Loop uses callbacks
*/

// Task - 2
// app.use((request, response, next) => {
//     console.log('First Middleware');
//     next();
//  });

//  app.use((request, response, next) => {
//     console.log('Second Middleware');
//     response.send('<h1> Second Middleware');
//  });

// Task-3 

app.use('/users', (request, response, next) => { // matches for any route starting with /users
   console.log("In /users route");
   response.send('<h1> Users Page </h1>');
});

app.use('/', (request, response, next) => { // matches for any route starting with /
   console.log("In /root route");
   response.send('<h1> Hello from Express </h1>');
});

app.listen(3000);