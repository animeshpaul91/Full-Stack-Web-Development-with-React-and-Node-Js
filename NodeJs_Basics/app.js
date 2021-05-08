const http = require("http");
const fs = require('fs');

// this program keeps on running as long as there are event listeners registered
const server = http.createServer((request, response) => { // this is an event listener which never stops unless told to do so
    const url = request.url;
    const method = request.method;

    if (url === "/") { // url is true and is exactly "/"
        response.setHeader("Content-Type", "text/html");
        response.write("<html>");
        response.write("<head> <title> Enter Message </title> </head>");
        response.write('<body> <form action="/message" method="POST"> <input type="text" name="message"> <button type="submit"> Send </button> </form> </body>');
        response.write("</html>")
        return response.end();
    }

    if (url === "/message" && method === "POST") {
        const body = [];
        request.on('data', (chunk) => { // register an event listener
            body.push(chunk); // get all chunks from stream
        });

        request.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split("=")[1];
            fs.writeFileSync("message.txt", message);
        });
        
        response.statusCode = 302;
        response.setHeader('Location', '/'); // redirect to "/"
        return response.end();
    }

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