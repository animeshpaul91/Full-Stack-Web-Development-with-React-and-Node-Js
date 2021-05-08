const fs = require('fs');

// this program keeps on running as long as there are event listeners registered

const requestHandler = (request, response) => { // this is an event listener which never stops unless told to do so
    const url = request.url;
    const method = request.method;

    if (url === "/") { // url is true and is exactly "/"
        response.setHeader("Content-Type", "text/html");
        response.write("<html>");
        response.write("<head> <title> Welcome to Node Js. </title> </head>");
        response.write('<body> <h1> Welcome to the world of Node Js. </h1> </body>');
        response.write('<body> <form action="/create-user" method="POST"> <input type="text" name="username"> <button type="submit"> Create User </button> </form> </body>');
        response.write("</html>")
        return response.end();
    }

    if (url === '/users') {
        const users = ['Animesh', 'Sandeep', 'Boris', 'Praveen', 'Swagat'];
        response.setHeader("Content-Type", "text/html");
        response.write("<html>");
        response.write("<head> <title> Users List. </title> </head>");
        response.write('<body> <h1> List of Users. </h1>');
        response.write("<ul>")

        for (let user of users) {
            response.write(`<li> ${user} </li>`);
        }

        response.write("</ul> </body> </html");
        return response.end();      
    }

    if (url === "/create-user" && method === "POST") {
        const body = [];
        request.on('data', (chunk) => { // register an event listener
            body.push(chunk); // get all chunks from stream
        });

        return request.on('end', () => { // register an end event to incoming data on stream
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split("=")[1];
            fs.writeFile("message.txt", message, error => { // writeFile is asynchronous
                response.statusCode = 302;
                response.setHeader('Location', '/'); // redirect to "/"
                return response.end();
            });
        });
    }
}


// Different ways to export properties from file

// module.exports = requestHandler;

// module.exports = { // multiple exports
//     handler: requestHandler, 
//     someText: 'Some Hardcoded Text'
// };

// module.exports.handler = requestHandler;
// module.exports.someText = 'Some Hardcoded Text';

exports.handler = requestHandler;
exports.someText = 'Some Hardcoded Text';
