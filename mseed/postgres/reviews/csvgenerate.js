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
    if (restNum % stepSize === 0 && restNum !== 0) {
      console.log(restNum / stepSize);
    }

    let useful = faker.random.number(3);
    let funny = faker.random.number(3);
    let cool = faker.random.number(3);
    let date = faker.date.recent();

    result += `${((fileNum - 1) * chunkSize + restNum)},\
${useful},\
${funny},\
${cool},\
${useful === 0 ? 0 : faker.random.number(1)},\
${funny === 0 ? 0 : faker.random.number(1)},\
${cool === 0 ? 0 : faker.random.number(1)},\
"${date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear()}",\
"${faker.lorem.sentences(Math.ceil(Math.random() * 3))}",\
${faker.random.number(1)},\
${faker.random.number(99999)}`; // user # based on max number of users

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
      if (fileNum < 30) {
        fileNum++;
        writeIt();
      }
    }
  );
};

writeIt();
