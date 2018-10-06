const fs = require('file-system');
const cassandra = require('cassandra-driver');
const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  keyspace: 'yelp'
});


// i'm copy-pasting this into cqls shell... no way to do it with script afaik
let query = 'COPY reviews (id, useful_count, funny_count, cool_count, useful_clicked, funny_clicked,\
 cool_clicked, date, review_text, count_checkin, user, rating)\
 FROM \'../data/reviewsWithRating/01.csv\' WITH HEADER = TRUE';

console.log(query);
// client.execute(query);



// result += `${((fileNum - 1) * chunkSize + restNum)},\
// ${useful},\
// ${funny},\
// ${cool},\
// ${useful === 0 ? 0 : faker.random.number(1)},\
// ${funny === 0 ? 0 : faker.random.number(1)},\
// ${cool === 0 ? 0 : faker.random.number(1)},\
// "${date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear()}",\
// "${faker.lorem.sentences(Math.ceil(Math.random() * 3))}",\
// ${faker.random.number(1)},\
// ${faker.random.number(99999)},\
// ${(faker.random.number(9) + 1) / 2}`; //rating
