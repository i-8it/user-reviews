const Restaurant = require("../models/review.js");
// http://localhost:3002/reviews/100/

const nameToUrl = function(name) {
  return name.replace(/ /g, '-');
};

const urlToName = function(url) {
  return url.replace(/-/g, ' ');
};

module.exports = {
  get: (req, res) => {
    const nameOrId = req.params.nameOrId;
    const filter = !isNaN(nameOrId)
      ? {id: nameOrId}
      : {name: urlToName(nameOrId)};

    Restaurant.find(
      filter,
      (err, data) => {
        if (err) {
          res.send(err);
        } else {
          res.send(data);
        }
      }
    );
  },
  post: (req, res) => {
    const dataToAdd = req.query;
    Restaurant.create(
      dataToAdd,
      (err, data) => {
        if (err) {
          res.send(err);
        } else {
          res.send(data);
        }
      }
    );
  },
  put: (req, res) => {
    const nameOrId = req.params.nameOrId;
    const filter = !isNaN(nameOrId)
      ? {id: nameOrId}
      : {name: urlToName(nameOrId)};
    const dataToUpdate = req.query;
    const options = {
      upsert: false,
      returnNewDocument: true
    };

    Restaurant.findOneAndUpdate(
      filter,
      dataToUpdate,
      options,
      (err, data) => {
        if (err) {
          res.send(err);
        } else {
          res.send(data);
        }
      }
    );
  },
  delete: (req, res) => {
    // it deletes but only after several refreshes/a bit of time?
    const nameOrId = req.params.nameOrId;
    const filter = !isNaN(nameOrId)
      ? {id: nameOrId}
      : {name: urlToName(nameOrId)};

    Restaurant.deleteOne(
      filter,
      (err, data) => {
        if (err) {
          res.send(err);
        } else {
          res.send(data);
        }
      }
    );
  }
};
// Model.findOneAndUpdate({ name : 'myBook', "data._id" : 'chapter' }, { "data.$.name" : 'Chapter 1' });
