const express = require('express');

const router = express.Router();


// Specific routes appear before
router.get('/add-product', (request, response, next) => { // matches for any route starting with /
    // console.log("In product Middleware!");
    // default response header is text/HTML
 
    response.send('<form action="/product" method="POST"><input type="text" name="title"> <button type="submit"> Add Product </button> </form>');
    // you never wanna call next() here
 });
 
 router.post('/product', (request, response, next) => { // matches for any route starting with /
    console.log(request.body);
    response.redirect('/');
 });

 module.exports = router;