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
  const fileName = (fNum < 10)
    ? '0' + fNum
    : fNum;

  fs.readFile(`data/${fileName}.csv`, (err, res) => {
    console.log(`read file ${fileName}.csv`);

    let query = String(res);
    query = query.replace(/\n/g, '),(');
    query = query.substr(0, query.length - 3);
    query = 'INSERT INTO jointable2 (rest, rev) VALUES (' + query + ');';

    console.log(`send query: ${query.substr(0, 100)}...`);
    console.log(`... ${query.substr(query.length - 100, query.length)}`);

    pgClient.query(query, (err, res) => {
      if (err) {
        console.log('insert error', err.stack);
      } else {
        console.log('success');
        if (fNum <= 20) {
          insertData(fNum + 1);
        } else {
          pgClient.end();
        }
      }
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
