const fs = require('file-system');

let fileNum = process.argv[2];
if (isNaN(fileNum)) { fileNum = 1; }
fileNum = Number(fileNum);
if (fileNum < 10) { fileNum = '0' + fileNum; }

const processFile = function (content) {
  content = JSON.parse(content);

  let million = 1000000;
  let max = 20 * million;
  let reviewCount = 0;
  let result = [];

  // for each restaurant
  for (var i = 0; i < content.length; i++) {
    if (i % 100000 === 0) {
      console.log(`wrote ${i / 100000}00,000`);
    }

    let randomReviews = [];

    for (var j = 0; j < Math.ceil(Math.random() * 5); j++) {
      if (reviewCount > max) {
        reviewCount = 0;
      }
      randomReviews.push(reviewCount);
      reviewCount++;
    }
    result.push({
      id: i,
      name: content[i],
      reviews: randomReviews
    });

    // console.log(reviewCount);
  }

  return result;
  console.log('stringifying...');
  // console.log(content);
};


fs.readFile(`mock-data/${fileNum}.json`, function read(err, data) {
  if (err) {
    console.log('error');
    console.log(err);
    return;
  }

  fs.writeFile(
    `restaurantsData/${fileNum}.json`,
    JSON.stringify(processFile(data)).substr(1, -1),
    (err, res) => {
      console.log(`${fileNum}.json written!`);
    }
  );
});
