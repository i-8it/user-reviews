const fs = require('file-system');
const faker = require('faker');

let fileNum = process.argv[2];
if (isNaN(fileNum)) { fileNum = 1; }
fileNum = Number(fileNum);

const processFile = function () {
  let max = 100000;
  let result = [];

  for (var i = 0; i < max; i++) {
    result += `
${i},\
"${faker.name.firstName() + ' ' + faker.name.lastName()[0] + '.'}",\
"${faker.address.city()}",\
"${faker.address.stateAbbr()}",\
"${faker.image.avatar()}",\
${faker.random.number(100)},\
${faker.random.number(500)},\
${faker.random.number(500)}`;

    // result = result + '\n';

    if (i % 10000 === 0) {
      console.log(i / 10000);
    }
  }
  return result;
};

fs.writeFile(
  'csv/01.csv',
  processFile(),
  (err, res) => {
    console.log('01.csv written!');
  }
);
