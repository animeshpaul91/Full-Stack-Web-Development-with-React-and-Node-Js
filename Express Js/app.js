const http = require("http");

const express = require('express');

const app = express();

/* Node Js runs non-blocking JS code and uses an event-driven approach for running logic in code.
   A standard node program exits as soon as there is no more work to do
   The createServer() event never finishes by default
   Event Loop uses callbacks
*/

app.use((request, response, next) => { // this is a middleware
   console.log("In the Middleware!");
   next(); // this allows the request to continue to the next middleware in line
});

app.use((request, response, next) => {
   console.log("In another Middleware!");
});

const server = http.createServer(app); // creates an infinite event loop (listener)


server.listen(3000);