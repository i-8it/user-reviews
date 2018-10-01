const faker = require('faker');
const fs = require('file-system');

let fileNum = process.argv[2];
if (isNaN(fileNum)) { fileNum = 1; }
fileNum = Number(fileNum);

let chunkSize = 1000000;
let stepSize = chunkSize / 10;

console.log(`generating ${fileNum}.csv`);
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
  // for (var restNum = 0; restNum < 10; restNum++) {
    if (restNum % stepSize === 0 && restNum !== 0) {
      console.log(restNum / stepSize);
    }

    let date = faker.date.recent();

    result += `${((fileNum - 1) * chunkSize + restNum)},\
${faker.random.number(3)},\
${faker.random.number(3)},\
${faker.random.number(3)},\
${faker.random.number(1)},\
${faker.random.number(1)},\
${faker.random.number(1)},\
"${date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear()}",\
"${faker.lorem.sentences(Math.ceil(Math.random() * 3))}",\
${faker.random.number(1)}\
${faker.random.number(99999)}`;

    result = result + '\n';
  }
  console.log(`done generating ${max} entries! writing...`);
  return result;
};

const writeIt = function() {
  let fileName = (fileNum < 10)
    ? '0' + fileNum
    : fileNum;
  fs.writeFile(
    `csv/${fileName}.csv`,
    generate(chunkSize),
    (err, res) => {
      console.log(`${fileName}.csv written!`);
      if (fileNum < 10) {
        fileNum++;
        writeIt();
      }
    }
  );
};

writeIt();
