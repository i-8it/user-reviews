DROP KEYSPACE yelp;

CREATE KEYSPACE yelp
  WITH REPLICATION = {
    'class': 'SimpleStrategy',
    'replication_factor': 3
  };

/*
source 'schema.cql'
INSERT INTO reviews JSON '{...}'
*/

CREATE TYPE userInfo (
  id int,
  name varchar,
  city varchar,
  state varchar,
  profile_image varchar,
  count_friends int,
  count_reviews int,
  count_photos int,
);

CREATE TYPE reviewBody (
  count_starRatings double,
  date varchar,
  text_review text,
  count_checkin int
);

CREATE TABLE reviews (
  id int,
  name varchar,
  ratings int,
  reviewsCount int,
  useful_count int,
  funny_count int,
  cool_count int,
  useful_clicked int,
  funny_clicked int,
  cool_clicked int,
  user userInfo,
  review reviewBody,
  PRIMARY KEY (id)
);
