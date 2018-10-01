/*

SELECT * FROM (
  SELECT * FROM reviews WHERE id IN (
    SELECT rev FROM jointable WHERE rest=(
      SELECT id FROM restaurants WHERE name=UPPER('Davis''s Fantastic Handcrafted Soft Table #87')
   )
 )
) t1
INNER JOIN (
  select * from users
) t2
on t1.user_id=t2.id
ORDER BY date DESC
;

*/

// SELECT * FROM (SELECT * FROM reviews WHERE id IN (SELECT rev FROM jointable WHERE rest=(SELECT id FROM restaurants WHERE name=UPPER('davis''s fantastic handcrafted soft table #87')))) t1 INNER JOIN (select * from users) t2 on t1.user_id=t2.id ORDER BY date DESC;



///// CASSANDRA /////
/*

INSERT INTO reviews (id, restaurant_id, cool_clicked, cool_count, funny_clicked, funny_count, name, ratings, review, reviewscount, useful_clicked, useful_count, user)
VALUES ( 10, 11, 0, 0, 1, 1, 'mario', 301,
{
  count_starRatings: 3.5,
  date: '2018-09-28T18:52:54.438Z',
  text_review: 'lorem ipsum',
  count_checkin: 1
},
219, 0, 2,
{
  name: 'lorem',
  city: 'san francisco',
  state: 'ca',
  profile_image: 'http://sdkfopseip.com/o2wkd;ls,/,sclweklwkdmlw/d/f',
  count_friends: 123,
  count_reviews: 234,
  count_photos: 345
});

*/
