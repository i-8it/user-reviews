// 99990,"Josiane C.","North Kaileymouth","GA","https://s3.amazonaws.com/uifaces/faces/twitter/maximsorokin/128.jpg",93,199,166


const fs = require('file-system');

let param = Number(process.argv[2]);
if(!param) {param = 1;}


fs.readFile('../users/01.csv', (err, data) => {
  let users = String(data).split('\n');
  users.shift(1);
  // users = users[param]; // users is an array of all users
  let uString = users[param].replace(/(\d.*?),(\d\d?),(\d\d?),(\d\d?),(\d\d?),(\d\d?),(\d\d?),(".*?"),(".*?"),(\d\d?),(\d\d?\d?\d?\d?),(\d\.?\d?),/g,
    '{\
      id: $1,\
      : $2,\
      id: $3,\
      id: $4,\
      id: $5,\
      id: $6,\
      id: $7,\
      id: $8,\
      id: $9,\
      id: $10,\
      id: $11,\
      id: $12,\
    }')
});
