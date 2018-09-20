const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/reviews.js");

router.get("/reviews/:nameOrId", ctrl.fetch);
// router.post("/", ctrl.update);

module.exports = router;
