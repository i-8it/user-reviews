const fs = require('file-system');
const cassandra = require('cassandra-driver');
const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  keyspace: 'yelp'
});

fs.readFile('../data/users/01.csv', (err, data) => {
  let query = String(data);

  query = query.split('\n').map((elt) => {
    let userObj = elt.split(',');

    return {
      query: `UPDATE reviews SET user=? WHERE user=${userObj[0]};`,
      params: [`{
id:${userObj[0]}
name:${userObj[1]}
city:${userObj[2]}
state:${userObj[3]}
profile_image:${userObj[4]}
count_friends:${userObj[5]}
count_reviews:${userObj[6]}
count_photos:${userObj[7]}
}`
      ]};
  });
  // end array map

  // console.log(query);

  const cassInsert = function(query, num) {
    client.batch(query, { prepare: true })
      .then((result) => {
        // num++;
        // if (num < divisions) {
        //   cassInsert(query, num);
        // }
      });
  };

  // console.log(query.slice(1, 4));
  cassInsert(query.slice(1, 2), 0);
  // cassInsert(query, 0);

});

// JESSE USER OBJECT
// id: 0,
// "name":"Fanny Hilpert",
// "city":"South Charlieburgh",
// "state":"KY",
// "profile_image":"https://s3.amazonaws.com/uifaces/faces/twitter/iamkeithmason/128.jpg",
// "count_friends":630,
// "count_reviews":389,
// "count_photos":107
