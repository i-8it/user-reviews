const fs = require('file-system');

let fileNum = process.argv[2];
if (isNaN(fileNum)) { fileNum = 1; }
fileNum = Number(fileNum);

const processFile = function (content) {
  content = JSON.parse(content);
  // console.log(content);

  let million = 1000000;
  let result = '';

  console.log(`fileNum = ${fileNum}`);
  console.log(`from ${((fileNum - 1) * million)} to ${(fileNum * million)}`);

  for (var i = ((fileNum - 1) * million); i < (fileNum * million); i++) {
    if (i % 100000 === 0) {
      console.log(i / 100000);
    }

    result += `${i},${(content[i % million]).toUpperCase()}`;
    result = result + '\n';

  }

  return result;
  console.log('stringifying...');
};

const writeIt = function (fNum) {
  let fileName = (fNum < 10)
    ? '0' + fNum
    : fNum;

  fs.readFile(`mock-data/${fileName}.json`, function read(err, data) {
    if (err) {
      console.log('error');
      console.log(err);
      return;
    }

    fs.writeFile(
      `data/${fileName}.csv`,
      // JSON.stringify(processFile(String(data))).slice(1, -1),
      processFile(String(data)),
      (err, res) => {
        console.log(`${fileName}.csv written!`);
        if (fNum < 10) {
          fileNum++;
          writeIt(fNum + 1);
        }
      }
    );
  });
};

writeIt(fileNum);
