const fs = require('file-system');
const cassandra = require('cassandra-driver');
const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  keyspace: 'yelp'
});

fs.readFile('../data/reviewsWithRating/01.csv', (err, data) => {
  let query = String(data);

  query = query.substr(0, 3000);
  query = query.substr(0, query.lastIndexOf('\n'));
// console.log(query);
  // construct json objects w/in user and reviews

// --DATABASE
// id,
// cool_clicked,
// cool_count,
// funny_clicked,
// funny_count,
// name,
// ratings,
// review,
// reviewscount,
// useful_clicked,
// useful_count,
// user

// JESSE REV OBJECT
// "count_starRatings":2,
// "date":"2015-07-20T22:04:34.404Z",
// "text_review":"Rem sapiente quaerat nesciunt temporibus est. Perferendis eos et provident ea. Laboriosam odit quo repellat voluptas consequatur deleniti. Neque ipsa molestiae voluptatibus rerum itaque.",
// "count_checkin":1,

// JESSE USER OBJECT
// id: 0,
// "name":"Fanny Hilpert",
// "city":"South Charlieburgh",
// "state":"KY",
// "profile_image":"https://s3.amazonaws.com/uifaces/faces/twitter/iamkeithmason/128.jpg",
// "count_friends":630,
// "count_reviews":389,
// "count_photos":107

// --CSV
// 0  id??? maybe? // ${((fileNum - 1) * chunkSize + restNum)},\????
// 1  useful_count
// 2  funny_count
// 3  cool_count
// 4  useful_clicked
// 5  funny_clicked
// 6  cool_clicked
// 7  date
// 8  review text
// 9  checkins
// 10 user number
// 11 rating

  query = query.split('\n').map((elt) => {
    let p = elt.split(',');
    let review = {
      count_starRatings: p[11],
      date: p[7],
      text_review: p[8],
      count_checkin: p[9]
    };
    let user = {
      id: p[10]
    }

    let paramObject = p.slice(0,7);
    paramObject.push(review);
    paramObject.push(user);

    console.log(paramObject);

    return {
      query: 'INSERT INTO reviews (id, useful_count, funny_count, cool_count, useful_clicked, funny_clicked, cool_clicked, review, user) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);',
      params: paramObject
    };
  });

  client.batch(query, { prepare: true })
    .then(result => console.log('Data insert successful!'));

});
