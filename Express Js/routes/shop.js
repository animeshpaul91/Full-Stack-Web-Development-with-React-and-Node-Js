const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (request, response, next) => { // router.get does an exact match for "/" but router.get matches starting with "/"
    // default response header is text/HTML
    response.sendFile(path.join(__dirname, '../', 'views', 'shop.html')); // / refers to root folder on OS
 });

 module.exports = router;