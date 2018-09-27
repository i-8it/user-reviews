const mongoose = require('mongoose');
require('dotenv').config();
//'mongodb://localhost/user-reviews'

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/user-reviews',
  { useNewUrlParser: true }
);

const db = mongoose.connection;
db.once('open', () =>
  console.log(`Connected to MongoDB on ${db.host}: ${db.port}`)
);

module.exports = mongoose;
