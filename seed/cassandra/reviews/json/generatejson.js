const faker = require('faker');
const fs = require('file-system');

let fileNum = process.argv[2];
if (isNaN(fileNum)) { fileNum = 1; }
fileNum = Number(fileNum);

// let chunkSize = 100000;
let chunkSize = 200000;
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
  let counter = 1;
  for (var restNum = 0; restNum < max; restNum++) {
    if (restNum % stepSize === 0 && restNum !== 0) {
      console.log(restNum / stepSize);
    }
    let date = new Date(faker.date.recent());

    for (var i = 0; i < faker.random.number(2) + 1; i++) {
      let city = faker.address.city();
      let firstName = faker.name.firstName();

      result +=
      // `${((fileNum - 1) * chunkSize + restNum)},\
`INSERT INTO reviews JSON '{\
"id": ${counter},\
"restaurant": ${((fileNum - 1) * chunkSize + restNum)},\
"review": {\
"count_starRatings": "${faker.random.number(100)}",\
"post_date": "${date.getMonth()}/${date.getDate()}/${date.getFullYear()}",\
"text_review": "${faker.lorem.sentences(Math.ceil(Math.random() * 3))}",\
"count_checkin": ${faker.random.number(1)},\
"reviewsCount": ${faker.random.number(100)},\
"useful_count": ${faker.random.number(3)},\
"funny_count": ${faker.random.number(3)},\
"cool_count": ${faker.random.number(3)},\
"useful_clicked": ${faker.random.number(1)},\
"funny_clicked": ${faker.random.number(1)},\
"cool_clicked": ${faker.random.number(1)}\
},\
"user": {\
"name": "${firstName.replace(/'/g, '')} ${faker.name.lastName()[0]}.",\
"location": "${city.replace(/'/g, '')}, ${faker.address.stateAbbr()}",\
"profile_image": "${faker.image.avatar()}",\
"count_friends": "${faker.random.number(100)}",\
"count_reviews": "${faker.random.number(500)}",\
"count_photos": "${faker.random.number(500)}",\
"count_photos": "${faker.random.number(500)}",\
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
    `data/${fileName}a.sql`,
    // JSON.stringify(generate(chunkSize)).slice(1, -1),
    // generate(chunkSize),
    'USE yelp;\n' + generate(chunkSize),
    // generate(chunkSize),
    (err, res) => {
      console.log(`${fileName}.json written!`);
      if (fileNum < 50) {
        fileNum++;
        writeIt();
      }
    }
  );
};

writeIt();
