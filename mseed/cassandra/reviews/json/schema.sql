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
  img varchar,
  friendsCnt smallint,
  reviewsCnt smallint,
  photosCnt smallint,
  ratings smallint,
);

CREATE TYPE reviewBody (
  rating decimal,
  date text,
  text text,
  checkins int,
  reviewsCnt int,
  usefulCnt int,
  funnyCnt int,
  coolCnt int,
  usefulClk int,
  funnyClk int,
  coolClk int
);

CREATE TABLE reviews (
  id int,
  rest int,
  -- restaurant varchar,
  user userInfo,
  review reviewBody,
  PRIMARY KEY (id, restaurant)
);
