const faker = require('faker');
const fs = require('file-system');

let fileNum = process.argv[2];
if (isNaN(fileNum)) { fileNum = 0; }
fileNum = Number(fileNum);

let million = 1000000;
let tenmillion = 10 * million;

const imgArr = [
  faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar(),
  faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar(),
  faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar(),
  faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar(),
  faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar(),
  faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar(), faker.image.avatar()
];


// CHANGE EACH TIME YOU NODE RUN THIS FILE //
// CHANGE EACH TIME YOU NODE RUN THIS FILE //
// CHANGE EACH TIME YOU NODE RUN THIS FILE //

let UIDcounter = (0 * million) + 1;

// CHANGE EACH TIME YOU NODE RUN THIS FILE //
// CHANGE EACH TIME YOU NODE RUN THIS FILE //
// CHANGE EACH TIME YOU NODE RUN THIS FILE //

const getRandomIntInclusive = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

let loremArr = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  'Ut ornare augue non eleifend accumsan. ',
  'Maecenas sit amet maximus lacus. ',
  'Nullam eu placerat metus, et aliquet ex. ',
  'Vivamus justo magna, tincidunt a convallis eu, semper vitae nunc. ',
  'Sed tincidunt quis purus vitae dictum. ',
  'Donec eu ante pharetra, maximus erat sit amet, imperdiet odio. ',
  'In tincidunt feugiat ligula, quis tempus leo eleifend in. ',
  'Pellentesque vitae lectus est. ',
  'In hac habitasse platea dictumst. ',
  'Duis iaculis elit pretium\ tempor congue. ',
  'Nulla mi mi, varius in viverra vel, condimentum nec felis. ',
  'Quisque ut mauris dolor. ',
  'Quisque consectetur, nunc nec lacinia elementum, metus metus pharetra turpis, porttitor congue lacus metus et odio. ',
  'Quisque finibus sagittis ex et porta. ',
  'Mauris vitae libero vehicula, sagittis felis sed, convallis tortor. ',
  'In ultricies sagittis lectus, ut pharetra nunc tristique id. ',
  'Curabitur dignissim ultricies suscipit. ',
  'Suspendisse dictum cursus mollis. ',
  'Maecenas sit amet maximus lacus. ',
  'Nullam eu\ placerat metus, et aliquet ex. '
];
let loremLength = loremArr.length;

const getRandomText = () => {
  let start = getRandomIntInclusive(loremLength - 4);
  return loremArr.slice(start, start + getRandomIntInclusive(4) + 1);
};

let missingnums = [
  999996,
]


const generate = function(restArr) {
  let result = '';

  for (var i = 0; i < restArr.length; i++) {
  // for (var i = restArr.length / 2; i < restArr.length; i++) {
    if (i % (million / 10) === 0) {
      console.log(`restaurant ${i} of ${restArr.length} (review #${UIDcounter})`);
    }

    for (var j = 0; j < getRandomIntInclusive(1); j++) {
    // if (true) {
      let city = faker.address.city();
      let firstName = faker.name.firstName();
      let date = new Date(faker.date.recent());
      let usefulCount = getRandomIntInclusive(3);
      let funnyCount = getRandomIntInclusive(3);
      let coolCount = getRandomIntInclusive(3);

      result +=

`${UIDcounter++},\
${i + (fileNum * restArr.length)},\
"${(restArr[i]).toUpperCase()}",\
"${firstName.replace(/'/g, '')} ${faker.name.lastName()[0]}.",\
"${city.replace(/'/g, '')}, ${faker.address.stateAbbr()}",\
"${faker.image.avatar()}",\
${getRandomIntInclusive(100)},\
${getRandomIntInclusive(300)},\
${getRandomIntInclusive(200)},\
${getRandomIntInclusive(500)},\
${(getRandomIntInclusive(9) + 1) / 2},\
"${date.getMonth()}/${date.getDate()}/${date.getFullYear()}",\
"${getRandomText()}",\
${getRandomIntInclusive(1)},\
${usefulCount},\
${funnyCount},\
${coolCount},\
${usefulCount > 0 ? getRandomIntInclusive(1) : 0},\
${funnyCount > 0 ? getRandomIntInclusive(1) : 0},\
${coolCount > 0 ? getRandomIntInclusive(1) : 0}\
`;
      result = result + '\n';
    }
  }
  return result;
};


const writeIt = function() {
  let fileName = (fileNum < 10)
    ? '0' + fileNum
    : fileNum;

  console.log(`generating ${fileName}.csv`);

  fs.readFile(`restaurants/quartermil/${fileName}.json`, (err, data) => {
    // console.log('length' + JSON.parse(String(data)).length);
    // each file has 500,000 restaurants

    console.log(JSON.parse(String(data)).length);
    return;

    fs.writeFile(
      `data/${fileName}.csv`,
      generate(JSON.parse(String(data))),
      (err, res) => {
        console.log(`${fileName}.csv written!`);
        if (fileNum < 40) {
          fileNum++;
          writeIt();
        }
      }
    );
  });
};
writeIt();


/*

COPY reviews (id, restaurant_id, restaurant_name, username, location, profile_image, count_friends, count_reviews, count_photos, ratings, count_starRatings, post_date, text_review, count_checkin, useful_count, funny_count, cool_count, useful_clicked, funny_clicked, cool_clicked) FROM 'data/02.csv' WITH HEADER = TRUE;

*/
