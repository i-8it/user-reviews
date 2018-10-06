const faker = require('faker');
const fs = require('file-system');

let fileNum = process.argv[2];
if (isNaN(fileNum)) { fileNum = 1; }
fileNum = Number(fileNum);

let chunkSize = 500000;
let stepSize = 100000;

console.log(`generating ${fileNum}.json`);
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
  let result = [];
  for (var restNum = 0; restNum < max; restNum++) {
    if (restNum % stepSize === 0 && restNum !== 0) {
      console.log(restNum / stepSize);
    }
    result.push({
      id: ((fileNum - 1) * chunkSize + restNum),
      useful_count: faker.random.number(3),
      funny_count: faker.random.number(3),
      cool_count: faker.random.number(3),
      useful_clicked: faker.random.number(1),
      funny_clicked: faker.random.number(1),
      cool_clicked: faker.random.number(1),
      // review: {
      date: faker.date.recent(),
      text_review: faker.lorem.sentences(Math.ceil(Math.random() * 3)),
      count_checkin: faker.random.number(1),
      user: faker.random.number(99999)
    });
  }
  console.log(`done generating ${max} entries! stringifying...`);
  return result;
};

const writeIt = function() {
  let fileName = (fileNum < 10)
    ? '0' + fileNum
    : fileNum;
  fs.writeFile(
    `data/${fileName}.json`,
    JSON.stringify(generate(chunkSize)).slice(1, -1),
    (err, res) => {
      console.log(`${fileName}.json written!`);
      if (fileNum < 29) {
        fileNum++;
        writeIt();
      }
    }
  );
};

writeIt();
