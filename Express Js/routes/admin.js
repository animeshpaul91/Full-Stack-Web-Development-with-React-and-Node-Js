const express = require('express');

const router = express.Router();


// Specific routes appear before
// route GET "/admin/add-product"
router.get('/add-product', (request, response, next) => { // matches for any route starting with /
    // console.log("In product Middleware!");
    // default response header is text/HTML
 
    response.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"> <button type="submit"> Add Product </button> </form>');
    // you never wanna call next() here
 });
 
 // route POST "/admin/add-product"
 router.post('/add-product', (request, response, next) => { // matches for any route starting with /
    console.log(request.body);
    response.redirect('/');
 });

 module.exports = router;