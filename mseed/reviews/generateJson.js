const faker = require('faker');
const fs = require('file-system');
const tenMil = 10000000;

const num = process.argv[2];
console.log(`generating reviews${num}.txt`);
/*const imgArr = [
  faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar(),
  faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar(),
  faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar(),
  faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar(),
  faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar(),
  faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar()
];*/

const generate = function(max) {
  let result = [];
  for (var i = 0; i < max; i++) {
    if (i % 100000 === 0 && i !== 0) {
      console.log(`at ${i / 100000} hundred thousand`);
    }
    result.push({
      index: i,
      restaurants:
        `${i},\
        ${faker.random.number(tenMil)},\
        ${faker.random.number(tenMil)},\
        ${faker.random.number(tenMil)},\
        ${faker.random.number(tenMil)}`,
      date: faker.date.recent(),
      avgRating: faker.random.number({min: 1, max: 10}) / 2,
      reviewBody: faker.lorem.paragraph(),
      numRatings: faker.random.number(500),
      numReviews: faker.random.number(5),
      numUseful: faker.random.number(5),
      numFunny: faker.random.number(5),
      numCool: faker.random.number(5),
      usefulClicked: faker.random.number(1),
      funnyClicked: faker.random.number(1),
      coolClicked: faker.random.number(1),
    });
  }
  console.log(`done generating ${max} entries! stringifying...`);
  return result;
};

// fs.writeFile('reviews2.txt', JSON.stringify(generate(500000)), function(err) {});
fs.writeFile(`reviews${num}.txt`, JSON.stringify(generate(500000)), function(err) {});

/*
userNumCheckin: Math.round(Math.random()),
userName: `${faker.name.firstName()} ${faker.name.lastName()[0]}`,
userCity: faker.address.city(),
userState: faker.address.stateAbbr(),
userProfileImg: imgArr[Math.floor(Math.random() * imgArr.length)],
userNumFriends: faker.random.number(400),
userNumReviews: faker.random.number(250),
userNumPhotos: faker.random.number(100)
*/
