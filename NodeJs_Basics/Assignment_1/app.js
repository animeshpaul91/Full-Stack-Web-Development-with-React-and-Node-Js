const http = require("http");
const routes = require("./routes");

console.log(routes.someText);

/* Node Js runs non-blocking JS code and uses an event-driven approach for running logic in code.
   A standard node program exits as soon as there is no more work to do
   The createServer() event never finishes by default
   Event Loop uses callbacks
*/

const server = http.createServer(routes.handler); // creates an infinite event loop (listener)


server.listen(3000);