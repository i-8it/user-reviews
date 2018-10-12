require('newrelic');
const dotenv = require('dotenv').config();
const app = require('./app.js');
const PORT = process.env.PORT || 9999;

console.log(`process.env.PORT: ${PORT}`);

const server = app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`)
});

server.setTimeout(1000);

module.exports = app;
