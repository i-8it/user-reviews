const ctrl = require('./controllers');
const router = require('express').Router();

router.get('/:', ctrl.getReviews);

module.exports = router;
