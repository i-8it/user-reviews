const fs = require('file-system');
const cassandra = require('cassandra-driver');
const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  keyspace: 'yelp'
});


// read from data/reviews

// CASSANDRA SCHEMA

// id
// restaurant_id
// cool_clicked
// cool_count
// funny_clicked
// funny_count
// name
// ratings
// review
// reviewscount
// useful_clicked
// useful_count
// user


// JESSE DATA


// "name":"ice cream patio",
// "id":40,
// "ratings":5,
// "reviewsCount":488,
// "useful_count":3,
// "funny_count":3,
// "cool_count":3,
// "useful_clicked":false,
// "funny_clicked":false,
// "cool_clicked":false,
// "review":{
//   "count_starRatings":2,
//   "date":"2015-07-20T22:04:34.404Z",
//   "text_review":"Rem sapiente quaerat nesciunt temporibus est. Perferendis eos et provident ea. Laboriosam odit quo repellat voluptas consequatur deleniti. Neque ipsa molestiae voluptatibus rerum itaque.",
//   "count_checkin":1,
//   "user":{
//     "name":"Cordia Satterfield",
//     "city":"Dorothealand",
//     "state":"DE",
//     "profile_image":"https://s3.amazonaws.com/uifaces/faces/twitter/Karimmove/128.jpg",
//     "count_friends":88,
//     "count_reviews":280,
//     "count_photos":127
//   }
// }
/*

// my data: data/reviews
{
  count_starRatings:2,
  date:"2015-07-20T22:04:34.404Z",
  text_review:"Rem sapiente quaerat nesciunt temporibus est. Perferendis eos et provident ea. Laboriosam odit quo repellat voluptas consequatur deleniti. Neque ipsa molestiae voluptatibus rerum itaque.",
  count_checkin:1,
  user:{
    name:"Cordia Satterfield",
    city:"Dorothealand",
    state:"DE",
    profile_image:"https://s3.amazonaws.com/uifaces/faces/twitter/Karimmove/128.jpg",
    count_friends:88,
    count_reviews:280,
    count_photos:127
  }
}
*/

//
// read reviews files one by one
// put in restaurant id and user id, which ill update later
// can i do that?
// try putting in 10 reviews
//

// insert into "review" column first,



  // SHAPE OF REVIEWS DATA THAT I'M READING FROM
  /*
    restaurant_id
    useful_count
    funny_count
    cool_count
    useful_clicked
    funny_clicked
    cool_clicked
      date?
    review text?
      count_checkin?
    user id?
  */

  // SHAPE OF DATABASE I'M TRYING TO WRITE TO
  /*
    id
      restaurant_id
      cool_clicked
      cool_count
      funny_clicked
      funny_count
    name // restaurant name
    ratings
      review
    reviewscount
      useful_clicked
      useful_count
      user
  */

fs.readFile('../data/reviewsWithRating/01.csv', (err, data) => {
  data = String(data);

  let query = data.substr(0, 1000);
  query = query.substr(0, query.lastIndexOf('\n'));
  query = query.replace(/\n/g, '),\n(');
  query = query.replace(/"(\d\d?\/\d\d?\/\d\d\d\d)","(.*?)",(\d),(\d\d?\d?\d?\d?\d?\d?),(\d\.?\d?)/g, '{date:\'$1\', text_review:\'$2\', count_checkin:$3, count_starRatings:$5}, {id:$4}');
  query = 'INSERT INTO reviews (id, useful_count, funny_count, cool_count, useful_clicked, funny_clicked, cool_clicked, review, user) VALUES (' + query + ')';

  console.log(query);


  // client.execute(query)
  //   .then((result) => {
  //     console.log('success');
  //   });


});
