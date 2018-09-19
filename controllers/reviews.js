const Review = require("../models/review.js");

module.exports = {
  fetch: (req, res) => {
    var id = req.params.nameOrId;
    console.log(isNaN(id));
    if (!isNaN(id)) {
      //search by name
      Review.find({ id: id }, (err, data) => {
        if (err) return console.log(err);
        res.send(data);
      });
      return;
    }
    //search by id
    console.log(id);
    Review.find({ name: id }, (err, data) => {
      if (err) return console.log(err);
      res.send(data);
    });
  }

  // update: (req, res) => {
  //   // console.log(req.body.data);
  //   var name = req.body.data[0].name;
  //   console.log(name);
  // var reviews = req.body.data;
  // Review.findOneAndUpdate({ name: name }, { $set: {} }, (err, review) => {
  //   // console.log(review);
  //   if (err) return console.log(err);
  //   review.review = reviews;
  // review.save(err => {
  //   if (err) return console.log(err);
  //   console.log("saved");
  //   res.send(200);
  // });
  // });
  // let data = req.body.data;

  // data.forEach(d => {
  //     Review.findOneAndUpdate({ name: name }, { $set: {
  //       useful_count: req.body.count,
  //       review.$._id
  //     } }, (err, d) => {
  //       if (err) return console.log(err);
  //       // d.save(err => {
  //       //   if (err) return console.log(err);
  //       //   console.log("saved");
  //       //   res.send(200);
  //       // });
  //     });
  //   // });
  // }
};
// Model.findOneAndUpdate({ name : 'myBook', "data._id" : 'chapter' }, { "data.$.name" : 'Chapter 1' });
