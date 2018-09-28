const fs = require('file-system');
const faker = require('faker');

let fileNum = process.argv[2];
if (isNaN(fileNum)) { fileNum = 1; }
fileNum = Number(fileNum);

const processFile = function () {
  let max = 100000;
  let result = [];

  for (var i = 0; i < max; i++) {
    result.push({
      id: i,
      name: faker.name.firstName() + ' ' + faker.name.lastName()[0] + '.',
      city: faker.address.city(),
      state: faker.address.stateAbbr(),
      profile_image: faker.image.avatar(),
      count_friends: faker.random.number(100),
      count_reviews: faker.random.number(500),
      count_photos: faker.random.number(500)
    });
    if(i % 10000 === 0) {
      console.log(i / 10000);
    }
  }
  return result;
  console.log('stringifying...');
};

fs.writeFile(
  'data/01.json',
  JSON.stringify(processFile()),
  (err, res) => {
    console.log('01.json written!');
  }
);
