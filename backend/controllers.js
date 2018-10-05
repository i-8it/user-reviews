const models = require('./models');

module.exports = {
  getReviews: (req, res) => {
    console.log(req.params.nameOrId);
    console.log('controllers > getReviews');
    models.getReviews(req.params.nameOrId, (data) => {
      res.send(data);
    });
  }
};
