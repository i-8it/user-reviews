// flattened

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


CREATE TABLE reviews2 (
  id int,
  useful_count smallint,
  funny_count smallint,
  cool_count smallint,
  useful_clicked smallint,
  funny_clicked smallint,
  cool_clicked smallint,
  date varchar,
  review_text text,
  count_checkin smallint,
  user int,
  rating double,
  PRIMARY KEY (id, user)
);
