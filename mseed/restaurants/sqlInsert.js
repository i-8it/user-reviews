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

  console.log(`read file ${fileName}.json`);
  fs.readFile(`data/${fileName}.json`, function read(err, data) {
    if (err) {
      console.log('error');
      console.log(err);
      return;
    }

    let query = String(data);
    query = query.replace(/"(id|name)":/g, '');
    query = query.replace(/{/g, '(').replace(/}/g, ')');
    query = query.replace(/'/g, "''").replace(/"/g, "'");
    query = `INSERT INTO restaurants (id, name) VALUES ${query};`;
    console.log(`send query: ${query.substr(0, 150)}...`);

    pgClient.query(query, (err, res) => {
      if (err) {
        console.log('error', err);
        return;
      }

      console.log('success!');

      if (fNum < 10) {
        insertData(fNum + 1);
        // pgClient.end();
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
