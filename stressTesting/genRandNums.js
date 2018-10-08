const fs = require('file-system');

let data = '';

const randomNumber = max => (Math.round(Math.random() * max));

let upperBound = 10000000;
let times = 100;

for (let i = 0; i < times; i++) {
	data += `${randomNumber(upperBound)}`;
	data = data + '\n';
}

data = data.substr(0, data.length - 1);

fs.writeFile('randomNumbers.csv', data, (err, res) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log('written!');
});
