const models = require('./models');

module.exports = {
  getReviews: (req, res) => {
    models.getReviews(req.params.nameOrId, (data) => {
      res.send(data);
    });
  },
  editReview: (req, res) => {
    models.editReview(req, (data) => {
      res.send(data);
    });
  }
};
