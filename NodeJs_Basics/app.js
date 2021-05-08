const http = require("http");
const routes = require("./routes");

console.log(routes.someText);

const server = http.createServer(routes.handler); // executes the function in routes that handles incoming requests


server.listen(3000);