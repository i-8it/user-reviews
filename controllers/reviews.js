const Restaurant = require("../models/review.js");
// http://localhost:3002/reviews/100/

const example = {
  name: 'ice cream patio2',
  id: 40,
  ratings: 5,
  reviewsCount: 488,
  useful_count: 3,
  funny_count: 3,
  cool_count: 3,
  useful_clicked: false,
  funny_clicked: false,
  cool_clicked: false,
  review: {
    count_starRatings: 2,
    date: '2015-07-20T22:04:34.404Z',
    text_review: 'Rem sapiente quaerat nesciunt temporibus est. Perferendis eos et provident ea. Laboriosam odit quo repellat voluptas consequatur deleniti. Neque ipsa molestiae voluptatibus rerum itaque.',
    count_checkin: 1,
    user: {
      name: 'Cordia Satterfield',
      city: 'Dorothealand',
      state: 'DE',
      profile_image: 'https://s3.amazonaws.com/uifaces/faces/twitter/Karimmove/128.jpg',
      count_friends: 88,
      count_reviews: 280,
      count_photos: 127
    }
  }
};

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
