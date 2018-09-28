const faker = require('faker');
const fs = require('file-system');

let fileNum = process.argv[2];
if (isNaN(fileNum)) { fileNum = 1; }
fileNum = Number(fileNum);
if (fileNum < 10) { fileNum = '0' + fileNum; }

console.log(`generating reviews${fileNum}.json`);
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
    if (restNum % 100000 === 0 && restNum !== 0) {
      console.log(`at ${restNum / 100000} hundred thousand`);
    }
    result.push({
      // id: i,
      // name: restArr[restNum],
      // restId: restNum,
      id: ((fileNum - 1) * 500000 + restNum),
      ratings: faker.random.number(100),
      reviewsCount: faker.random.number(50),
      useful_count: faker.random.number(3),
      funny_count: faker.random.number(3),
      cool_count: faker.random.number(3),
      useful_clicked: faker.random.number(1),
      funny_clicked: faker.random.number(1),
      cool_clicked: faker.random.number(1),
      review: {
        count_starRatings: faker.random.number(10) / 2,
        date: faker.date.recent(),
        text_review: faker.lorem.paragraph(),
        count_checkin: faker.random.number(1),
        user: {
          name: faker.name.firstName() + ' ' + faker.name.lastName()[0] + '.',
          city: faker.address.city(),
          state: faker.address.stateAbbr(),
          profile_image: imgArr[Math.floor(Math.random() * imgArrLength)],
          count_friends: faker.random.number(100),
          count_reviews: faker.random.number(500),
          count_photos: faker.random.number(500)
        }
      }
    });
  }
  console.log(`done generating ${max} entries! stringifying...`);
  return result;
};



fs.writeFile(`${fileNum}.json`, JSON.stringify(generate(500000)).slice(1, -1), function(err) {
// fs.writeFile('wfstest.txt', JSON.stringify(generate(500)).slice(1, -1), function(err) {
  if (err) {
    console.log('error:');
    console.log(err);
  }
});



/*
{
"name":"ice cream patio",
"id":40,
"ratings":5,
"reviewsCount":488,
"useful_count":3,
"funny_count":3,
"cool_count":3,
"useful_clicked":false,
"funny_clicked":false,
"cool_clicked":false,
"review":{
	"count_starRatings":2,
	"date":"2015-07-20T22:04:34.404Z",
	"text_review":"Rem sapiente quaerat nesciunt temporibus est. Perferendis eos et provident ea. Laboriosam odit quo repellat voluptas consequatur deleniti. Neque ipsa molestiae voluptatibus rerum itaque.",
	"count_checkin":1,
	"user":{
		"name":"Cordia Satterfield",
		"city":"Dorothealand",
		"state":"DE",
		"profile_image":"https://s3.amazonaws.com/uifaces/faces/twitter/Karimmove/128.jpg",
		"count_friends":88,
		"count_reviews":280,
		"count_photos":127
		}
	}
},
*/
