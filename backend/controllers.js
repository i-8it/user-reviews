const models = require('./models');
const axios = require('axios');
const redis = require('redis');
const dotenv = require('dotenv').config();

// create and connect redis client to local instance.
const client = redis.createClient({});

// Print redis errors to the console
client.on('error', (err) => {
  console.log(`Error ${err}`);
});



module.exports = {
  getReview: (serverRequest, serverResponse) => {
    let uid = 'review' + serverRequest.params.nameOrId;
//    console.log('controllers.js > getReview');
    client.get(uid, (redisError, redisResponse) => {
     if (redisResponse !== null) {
//        console.log(`found "${uid}" in cache!`);
        serverResponse.send(redisResponse);
      } else {
//        console.log(`${uid} not found. get from db`);
        models.getReview(serverRequest.params.nameOrId, (data) => {
          client.setex(uid, 3600, JSON.stringify(data));
          serverResponse.send(data);
        });

      }
    });

  },
  getRestaurantReviews: (serverRequest, serverResponse) => {
    let uid = 'restaurant' + serverRequest.params.nameOrId;
    client.get(uid, (redisError, redisResponse) => {
      if (redisResponse !== null) {
//        console.log(`found "${uid}" in cache!`);
        serverResponse.send(redisResponse);
      } else {
//        console.log(`"${uid}" not found. get from db`);
        models.getRestaurantReviews(serverRequest.params.nameOrId, (data) => {
          client.setex(uid, 3600, JSON.stringify(data));
          serverResponse.send(data);
        });
      }

    });

  },
  editReview: (req, res) => {
    models.editReview(req, (data) => {
      res.send(data);
    });
  }
};

