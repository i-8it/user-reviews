const fs = require('file-system');

let fileNum = process.argv[2];
if (isNaN(fileNum)) { fileNum = 1; }
fileNum = Number(fileNum);

const million = 1000000;
const max = 20 * million;

const processFile = function () {
  let reviewCount = 0;
  let result = '';

  console.log(`fileNum = ${fileNum}`);
  console.log(`from ${((fileNum - 1) * million)} to ${(fileNum * million)}`);

  // for each restaurant
  // for (var i = 0; i < 10; i++) {
  for (var i = ((fileNum - 1) * million); i < (fileNum * million); i++) {
    if (i % 100000 === 0) {
      console.log(i / 100000);
    }

    // for a random number of reviews (1-5)
    for (var j = 0; j < Math.ceil(Math.random() * 5); j++) {
      // how many reviews are there?
      result += `${i},${Math.round(Math.random() * (20 * million))}`;
      result = result + '\n';
    }
  }

  return result;
};

const writeIt = function (fNum) {
  let fileName = (fNum < 10)
    ? '0' + fNum
    : fNum;
  fs.writeFile(
    `csv/${fileName}.csv`,
    processFile(),
    (err, res) => {
      console.log(`${fileName}.csv written!`);
      if (fNum < 10) {
        fileNum++;
        writeIt(fNum + 1);
      }
    }
  );
};

writeIt(fileNum);
