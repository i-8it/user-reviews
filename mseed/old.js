const faker = require('faker');
const fs = require('file-system');


const generate = function(max) {
  let result = [];
  for (var i = 0; i < max; i++) {
    if (i % 100000 === 0 && i !== 0) {
      console.log(`at ${i / 100000} hundred thousand`);
    }
    result.push({
      restaurant: i,
      ratings: faker.random.number(500),
      reviewsCount: faker.random.number(5),
      useful_count: faker.random.number(5),
      funny_count: faker.random.number(5),
      cool_count: faker.random.number(5),
      useful_clicked: 0,
      funny_clicked: 0,
      cool_clicked: 0,
      review: {
        count_starRatings: Math.ceil(Math.random() * 10) / 2,
        date: faker.date.recent(),
        text_review: faker.lorem.paragraph(),
        count_checkin: Math.round(Math.random()),
        user: {
          name: `${faker.name.firstName()} ${faker.name.lastName()[0]}`,
          city: faker.address.city(),
          state: faker.address.stateAbbr(),
          profile_image: faker.image.avatar(),
          count_friends: faker.random.number(400),
          count_reviews: faker.random.number(250),
          count_photos: faker.random.number(100)
        }
      }
    });
  }
  console.log(`done generating ${max} entries! stringifying...`);
  return result;
};

fs.writeFile('reviews2.txt', JSON.stringify(generate(500000)), function(err) {});

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
}
*/
