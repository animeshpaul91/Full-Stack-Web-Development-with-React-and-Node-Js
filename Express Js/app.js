const http = require("http");

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false})); // registers a middlewate and calls next()


/* Node Js runs non-blocking JS code and uses an event-driven approach for running logic in code.
   A standard node program exits as soon as there is no more work to do
   The createServer() event never finishes by default
   Event Loop uses callbacks
*/

app.use('/', (request, response, next) => {
   // console.log('This always runs!');
   next();
});

// Specific routes appear before
app.use('/add-product', (request, response, next) => { // matches for any route starting with /
   // console.log("In product Middleware!");
   // default response header is text/HTML

   response.send('<form action="/product" method="POST"><input type="text" name="title"> <button type="submit"> Add Product </button> </form>');
   // you never wanna call next() here
});

app.use('/product', (request, response, next) => { // matches for any route starting with /
   console.log(request.body);
   response.redirect('/');
});

app.use('/', (request, response, next) => { // matches for any route starting with /
   // console.log("In another Middleware!");
   // default response header is text/HTML
   response.send('<h1> Hello from Express </h1>');
});

app.listen(3000);