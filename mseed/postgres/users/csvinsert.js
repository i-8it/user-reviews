// insert 100,000 users

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

const insertData = function (fNum) {
  let fileName = (fNum < 10)
    ? '0' + fNum
    : fNum;

  console.log(`read file ${fileName}.csv`);
  fs.readFile(`csv/${fileName}.csv`, function read(err, data) {
    if (err) {
      console.log('error');
      console.log(err);
      return;
    }

    // 0,"Tara T.","West Winona","PA","https://s3.amazonaws.com/uifaces/faces/twitter/carlosjgsousa/128.jpg",64,140,381

    let query = String(data);
    query = query.replace(/'/g, "''");
    query = query.replace(/"/g, "'");
    query = query.replace(/\n/g, '),(');
    query = query.substr(2, query.length);


    query = `INSERT INTO userscsv (id, name, city, state, profile_image, count_friends, count_reviews, count_photos) VALUES ${query});`;
    query = query.substr(0, query.length - 1) + ';';

    console.log(`send query: ${query.substr(0, 500)}...`);
    // console.log(`send query: ${query.substr(query.length - 500, query.length)}`);

    pgClient.query(query, (err, res) => {
      if (err) {
        console.log('error', err);
        return;
      }

      console.log('success!');

      // if (fNum < 10) {
      //   insertData(fNum + 1);
      // }
    });
  });
};

pgClient.connect((err) => {
  if (err) {
    console.log('connection error', err.stack);
  } else {
    console.log('connected to postgres');
    insertData(fileNum);
  }
});
