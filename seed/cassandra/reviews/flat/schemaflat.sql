DROP KEYSPACE yelp;

CREATE KEYSPACE yelp
WITH REPLICATION = {
    'class': 'SimpleStrategy',
    'replication_factor': 2
  };

/*
source 'schema.cql'
INSERT INTO reviews JSON '{...}'
*/

CREATE TABLE reviews (
  id int,
  restaurant_id int,
  restaurant_name varchar,
-- user info
  username varchar,
  location varchar,
  profile_image varchar,
  count_friends smallint,
  count_reviews smallint,
  count_photos smallint,
-- review body
  ratings smallint,
  count_starRatings decimal,
  post_date text,
  text_review text,
  count_checkin int,
  useful_count int,
  funny_count int,
  cool_count int,
  useful_clicked int,
  funny_clicked int,
  cool_clicked int,
  PRIMARY KEY (restaurant_id, id)
);
