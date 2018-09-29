const fs = require('file-system');
const pg = require('pg');

let fileNum = process.argv[2];
if (isNaN(fileNum)) { fileNum = 1; }
fileNum = Number(fileNum);

var pgClient = new pg.Client({
  host: 'localhost',
  user: 'michellechen',
  password: '',
  database: 'yelp',
  port: 5432,
});

const insertData = function () {

  /*
    id: 98,
    name: 'Kirk B.',
    city: 'Dellahaven',
    state: 'PA',
    profile_image: 'https://s3.amazonaws.com/uifaces/faces/twitter/gcmorley/128.jpg',
    count_friends: 68,
    count_reviews: 34,
    count_photos: 286 },
  */

  fs.readFile('data/01.json', function read(err, res) {
    if (err) {
      console.log('error');
      console.log(err);
      return;
    }
    console.log('read 01.json');

    let query = String(res).slice(1, -1);
    query = query.replace(/,".*?":/g, ',').replace(/"id":/g, '');
    query = query.replace(/{/g, '(').replace(/}/g, ')');
    query = query.replace(/'/g, "''").replace(/"/g,"'");
    query = 'INSERT INTO users (id, name, city, state, profile_image, count_friends, count_reviews, count_photos) VALUES ' + query + ';';

    console.log(`send query: ${query.substr(0, 50)}...`);

    // console.log(query);
    // return;
    pgClient.query(query, (err, res) => {
      if (err) {
        console.log(err);
        return;
      } else {
        console.log('success');
        pgClient.end();
      }
    });
    // {"id":0,"name":"Edd B.","city":"East Marcosland","state":"AK","profile_image":"https://s3.amazonaws.com/uifaces/faces/twitter/stefvdham/128.jpg","count_friends":29,"count_reviews":113,"count_photos":443},{"id":1,"name":"Nash O.","city":"Adalbertohaven","state":"HI","profile_image":"https://s3.amazonaws.com/uifaces/faces/twitter/lawlbwoy/128.jpg","count_friends":3,"count_reviews":48,"count_photos":194},
    // console.log(query.substr(query.length - 500, query.length));
  });
};

pgClient.connect((err) => {
  if (err) {
    console.log('connection error', err.stack);
  } else {
    console.log('connected to postgres');
    insertData();
  }
});
