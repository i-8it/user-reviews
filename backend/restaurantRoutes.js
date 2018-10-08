const ctrl = require('./controllers');
const restaurantsRouter = require('express').Router();

restaurantsRouter.get('/:nameOrId', ctrl.getRestaurantReviews);
// restaurantsRouter.post('/:nameOrId', ctrl.editReview);

module.exports = restaurantsRouter;
