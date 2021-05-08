const http = require("http");

// this program keeps on running as long as there are event listeners registered
const server = http.createServer((request, response) => { // this is an event listener which never stops unless told to do so
    console.log(request.url, request.method, request.headers);
    // process.exit(); // will exit upon receiving first request
    // fill response object with data
    response.setHeader("Content-Type", "text/html");
    response.write("<html>");
    response.write("<head> <title> My First Page </title> </head>");
    response.write("<body><h1> Hello from Node Js Server! </h1> </body>");
    response.write("</html>")
    response.end();
    // cannot write to response anymore at this point
});

server.listen(3000);