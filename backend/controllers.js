const models = require('./models');

module.exports = {
  getReview: (req, res) => {
    models.getReview(req.params.nameOrId, (data) => {
      res.send(data);
    });
  },
  getRestaurantReviews: (req, res) => {
    models.getRestaurantReviews(req.params.nameOrId, (data) => {
      res.send(data);
    });
  },
  editReview: (req, res) => {
    models.editReview(req, (data) => {
      res.send(data);
    });
  }
};
