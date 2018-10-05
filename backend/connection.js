const { Pool, Client } = require('pg');

const client = new Client({
  host: 'localhost',
  user: 'michellechen',
  password: '',
  database: 'yelp'
});

client.connect((err, res) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('connected!');
});

module.exports = client;
