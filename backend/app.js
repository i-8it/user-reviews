// All server functionality is on app.js but is executed on server.js

// express
const express = require('express');
const app = express();

// npm
const bodyParser = require('body-parser'); // turns the request into readble form?
const logger = require('morgan');
const path = require('path');
const cors = require('cors');

// other files
const restaurantRoutes = require('./restaurantRoutes');
const reviewRoutes = require('./reviewRoutes');

// body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use doesn't set up any restaurantRoutes, just options
app.use('/:id', express.static('./public'));
app.use('/api/restaurants', restaurantRoutes); // gets all reviews for a restaurant
app.use('/api/reviews', reviewRoutes); // gets a single review

// etc
app.use(logger('dev'));

module.exports = app;
