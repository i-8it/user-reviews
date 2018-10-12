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
const dotenv = require('dotenv').config();
const restaurantRoutes = require('./restaurantRoutes');
const reviewRoutes = require('./reviewRoutes');

// body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.use('/loaderio-964ed19e94d8862de8fe2b60b1719940', (req, res) => res.send('loaderio-964ed19e94d8862de8fe2b60b1719940'));
app.use(`/${process.env.LOADERIO}`, (req, res) => res.send(process.env.LOADERIO));

// app.use doesn't set up any restaurantRoutes, just options
app.use('/:id', express.static('./public'));
app.use('/api/reviews', restaurantRoutes); // gets all reviews for a restaurant
app.use('/api/review', reviewRoutes); // gets a single review

// etc
app.use(logger('dev'));

module.exports = app;
