const ctrl = require('./controllers');
const router = require('express').Router();

router.get('/:nameOrId', ctrl.getReviews);

module.exports = router;
