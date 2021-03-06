const fs = require('file-system');

let fileNum = process.argv[2];
if (isNaN(fileNum)) { fileNum = 1; }
fileNum = Number(fileNum);

const million = 1000000;
const halfmil = million / 2;
// const max = 20 * million;

const processFile = function () {
  let reviewCount = 0;
  let result = '';

  console.log(`fileNum = ${fileNum}`);
  console.log(`from ${((fileNum - 1) * halfmil)} to ${(fileNum * halfmil)}`);

  // for each restaurant
  for (var i = ((fileNum - 1) * halfmil); i < (fileNum * halfmil); i++) {
    if (i % 100000 === 0) {
      console.log(i / 100000);
    }

    // for a random number of reviews (1-5)
    for (var j = 0; j < Math.ceil(Math.random() * 6 + 1); j++) {
      // how many reviews are there?
      result += `${i},${Math.round(Math.random() * (20 * halfmil))}`;
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
    `data/${fileName}.csv`,
    processFile(),
    (err, res) => {
      console.log(`${fileName}.csv written!`);
      if (fNum < 20) {
        fileNum++;
        writeIt(fNum + 1);
      }
    }
  );
};

writeIt(fileNum);
