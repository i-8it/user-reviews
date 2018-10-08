const ctrl = require('./controllers');
const reviewRouter = require('express').Router();

reviewRouter.get('/:nameOrId', ctrl.getReview);
reviewRouter.post('/:nameOrId', ctrl.editReview);

module.exports = reviewRouter;
