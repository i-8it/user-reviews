const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require("path");
const routes = require("../routes/reviews.js");
require("../database/database.js");

app.use("/:id", express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/reviews", routes);
app.use(logger("dev"));

module.exports = app;
