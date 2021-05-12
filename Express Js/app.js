const http = require("http");

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false})); // registers a middlewate and calls next()

app.use(adminRoutes); // router exported in admin.js is a valid midddleware function
// This will add all admin routes
// The order matters

app.use(shopRoutes);

app.use((request, response, next) => {
   response.status(404).send('<h1> Page not found </h1>');
});

app.listen(3000);