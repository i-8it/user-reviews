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
  fs.readFile(`data/${fileName}.csv`, function read(err, data) {
    if (err) {
      console.log('error');
      console.log(err);
      return;
    }


    let query = String(data);
    // query = query.replace(/,/g, ',\'');
    // query = query.replace(/\n/g, '\'),(');
    query = query.replace(/'/g, "''");
    query = query.replace(/(\d\d?\d?\d?\d?\d?\d?),(.*?)\n/g, '($1,\'$2\'),').toLowerCase();
    query = `INSERT INTO restaurantsLower (id,name) VALUES ${query}`;
    query = query.substr(0, query.length - 1) + ';';

    console.log(`send query: ${query.substr(0, 500)}...`);
    // console.log(`send query: ${query.substr(query.length - 500, query.length)}`);

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
