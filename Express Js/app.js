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
   // default response header is text/HTML
   response.send('<h1> Hello from Express </h1>');
});

app.listen(3000);