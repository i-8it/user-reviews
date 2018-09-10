const Review = require("../models/review.js");

module.exports = {
  fetch: (req, res) => {
    Review.find({}, (err, data) => {
      res.send(data);
    });
  }
};
