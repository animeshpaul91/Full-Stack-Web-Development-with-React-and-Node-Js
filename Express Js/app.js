const path = require('path');
const http = require("http");

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false})); // registers a middlewate and calls next()

app.use('/admin', adminRoutes); // router exported in admin.js is a valid midddleware function
// This will add all admin routes
// The order matters
// all routes in admin will be prefixed with "/admin"

app.use(shopRoutes);

app.use((request, response, next) => { // middleware to catch all route
   response.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);