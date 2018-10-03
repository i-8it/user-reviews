const faker = require('faker');
const fs = require('file-system');

let fileNum = process.argv[2];
if (isNaN(fileNum)) { fileNum = 1; }
fileNum = Number(fileNum);

// let chunkSize = 100000;
let chunkSize = 100000;
let stepSize = chunkSize / 10;

console.log(`generating ${fileNum}.sql`);
const imgArr = [
  faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar(),
  faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar(),
  faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar(),
  faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar(),
  faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar(),
  faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar()
];
const imgArrLength = imgArr.length;

const generate = function(max) {
  // let result = [];
  // let result = 'USE yelp;\n';
  let result = '';
  let counter = 0;
  for (var restNum = 0; restNum < max; restNum++) {
    if (restNum % stepSize === 0 && restNum !== 0) {
      console.log(restNum / stepSize);
    }
    let date = new Date(faker.date.recent());

    for (var i = 0; i < faker.random.number(3) + 1; i++) {
      let city = faker.address.city();
      let firstName = faker.name.firstName();

      result +=
      // `${((fileNum - 1) * chunkSize + restNum)},\
`INSERT INTO reviews JSON '{\
"id": ${counter},\
"rest": ${((fileNum - 1) * chunkSize + restNum)},\
"review": {\
"rating": "${faker.random.number(100)}",\
"date": "${date.getMonth()}/${date.getDate()}/${date.getFullYear()}",\
"text": "${faker.lorem.sentences(Math.ceil(Math.random() * 3))}",\
"checkins": ${faker.random.number(1)},\
"reviewsCnt": ${faker.random.number(100)},\
"usefulCnt": ${faker.random.number(3)},\
"funnyCnt": ${faker.random.number(3)},\
"coolCnt": ${faker.random.number(3)},\
"usefulClk": ${faker.random.number(1)},\
"funnyClk": ${faker.random.number(1)},\
"coolClk": ${faker.random.number(1)}\
},\
"user": {\
"name": "${firstName.replace(/'/g, '')} ${faker.name.lastName()[0]}.",\
"location": "${city.replace(/'/g, '')}, ${faker.address.stateAbbr()}",\
"img": "${faker.image.avatar()}",\
"friendsCnt": "${faker.random.number(100)}",\
"reviewsCnt": "${faker.random.number(500)}",\
"photosCnt": "${faker.random.number(500)}",\
"ratings": "${faker.random.number(500)}"\
}\
}';`;
      result = result + '\n';
      counter++;
    }
  }
  console.log(`done generating ${max} entries...`);
  // console.log(`done generating ${max} entries! stringifying...`);
  return result;
};

const writeIt = function() {
  let fileName = (fileNum < 10)
    ? '0' + fileNum
    : fileNum;
  fs.writeFile(
    `data/${fileName}.sql`,
    // JSON.stringify(generate(chunkSize)).slice(1, -1),
    // generate(chunkSize),
    'USE yelp;\n' + generate(chunkSize),
    // generate(chunkSize),
    (err, res) => {
      console.log(`${fileName}.json written!`);
      if (fileNum < 1) {
        fileNum++;
        writeIt();
      }
    }
  );
};

writeIt();
