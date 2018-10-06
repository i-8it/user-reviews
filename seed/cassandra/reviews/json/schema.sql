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

CREATE TYPE userInfo (
  name varchar,
  location varchar,
  profile_image varchar,
  count_friends smallint,
  count_reviews smallint,
  count_photos smallint,
  ratings smallint,
);

CREATE TYPE reviewBody (
  count_starRatings decimal,
  post_date text,
  text_review text,
  count_checkin int,
  reviewsCount int,
  useful_count int,
  funny_count int,
  cool_count int,
  useful_clicked int,
  funny_clicked int,
  cool_clicked int
);

CREATE TABLE reviews (
  id int,
  restaurant int,
  -- restaurant varchar,
  user userInfo,
  review reviewBody,
  PRIMARY KEY (restaurant)
);
