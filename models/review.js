const mongoose = require("mongoose");
// const mockData = require("../data.js");

let userSchema = new mongoose.Schema({
  name: String,
  city: String,
  state: String,
  profile_image: String,
  count_friends: Number,
  count_reviews: Number,
  count_photos: Number
});

let reviewsSchema = new mongoose.Schema({
  count_starRatings: Number,
  date: Date,
  text_review: String,
  count_checkin: String,
  user: userSchema
});

let restaurantSchema = new mongoose.Schema({
  name: String,
  reviewsCount: Number,
  ratings: Number,
  useful_count: Number,
  funny_count: Number,
  cool_count: Number,
  useful_clicked: Boolean,
  funny_clicked: Boolean,
  cool_clicked: Boolean,
  review: reviewsSchema
});

let Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
