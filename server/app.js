const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');
const routes = require('../routes/reviews.js');
require('../database/database.js');

var corsOptions = {
  origin: 'http://localhost:3002',
  optionsSuccessStatus: 200
};
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/:id', express.static('./public'));
app.use('/reviews', cors(corsOptions), routes);
app.use('/api/reviews', cors(corsOptions), routes);
app.use(logger('dev'));

module.exports = app;
