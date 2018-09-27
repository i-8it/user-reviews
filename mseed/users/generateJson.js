const faker = require('faker');
const fs = require('file-system');

const num = process.argv[2];
console.log(`generating users${num}.txt`);

const imgArr = [
  faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar(),
  faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar(),
  faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar(),
  faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar(),
  faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar(),
  faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar()
];

const generate = function(max) {
  let result = [];
  for (var i = 0; i < max; i++) {
    if (i % 10000 === 0 && i !== 0) {
      console.log(`at ${i / 1000} thousand`);
    }
    result.push({
      index: i,
      numCheckin: Math.round(Math.random()),
      name: `${faker.name.firstName()} ${faker.name.lastName()[0]}.`,
      location: `${faker.address.city()}, ${faker.address.stateAbbr()}`,
      profileImg: imgArr[Math.floor(Math.random() * imgArr.length)],
      numFriends: faker.random.number(400),
      numReviews: faker.random.number(250),
      numPhotos: faker.random.number(100)
    });
  }
  console.log(`done generating ${max} entries! stringifying...`);
  return result;
};

fs.writeFile(`users${num}.txt`, JSON.stringify(generate(50000)), function(err) {});
