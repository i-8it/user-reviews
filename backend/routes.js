const ctrl = require('./controllers');
const router = require('express').Router();

router.get('/:nameOrId', ctrl.getReviews);
router.post('/:nameOrId', ctrl.editReview);

module.exports = router;