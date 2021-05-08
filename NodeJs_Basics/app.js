const http = require("http");

// this program keeps on running as long as there are event listeners registered
const server = http.createServer((request, response) => { // this is an event listener which never stops unless told to do so
    console.log(request);
    // process.exit(); // will exit upon receiving first request
});

server.listen(3000);