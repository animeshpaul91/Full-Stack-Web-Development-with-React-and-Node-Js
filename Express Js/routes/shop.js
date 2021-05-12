const express = require('express');

const router = express.Router();

router.get('/', (request, response, next) => { // router.get does an exact match for "/" but router.get matches starting with "/"
    // default response header is text/HTML
    response.send('<h1> Hello from Express </h1>');
 });

 module.exports = router;