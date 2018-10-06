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
const routes = require('./routes');

// body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use doesn't set up any routes, just options
app.use('/:id', express.static('./public'));
app.use('/api/reviews', routes);

// etc
app.use(logger('dev'));

module.exports = app;
