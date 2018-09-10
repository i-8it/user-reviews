const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/reviews.js");

router.get("/", ctrl.fetch);

module.exports = router;
