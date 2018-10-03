/*
cqlsh -f insert.sql;
*/

USE yelp;

COPY reviews2 (id, useful_count, funny_count, cool_count, useful_clicked, funny_clicked, cool_clicked, date, review_text, count_checkin, user, rating) FROM '../data/reviewsCSV/10.csv' WITH HEADER = TRUE;

COPY reviews2 (id, useful_count, funny_count, cool_count, useful_clicked, funny_clicked, cool_clicked, date, review_text, count_checkin, user, rating) FROM '../data/reviewsCSV/11.csv' WITH HEADER = TRUE;

COPY reviews2 (id, useful_count, funny_count, cool_count, useful_clicked, funny_clicked, cool_clicked, date, review_text, count_checkin, user, rating) FROM '../data/reviewsCSV/12.csv' WITH HEADER = TRUE;

COPY reviews2 (id, useful_count, funny_count, cool_count, useful_clicked, funny_clicked, cool_clicked, date, review_text, count_checkin, user, rating) FROM '../data/reviewsCSV/13.csv' WITH HEADER = TRUE;

COPY reviews2 (id, useful_count, funny_count, cool_count, useful_clicked, funny_clicked, cool_clicked, date, review_text, count_checkin, user, rating) FROM '../data/reviewsCSV/14.csv' WITH HEADER = TRUE;

COPY reviews2 (id, useful_count, funny_count, cool_count, useful_clicked, funny_clicked, cool_clicked, date, review_text, count_checkin, user, rating) FROM '../data/reviewsCSV/15.csv' WITH HEADER = TRUE;

COPY reviews2 (id, useful_count, funny_count, cool_count, useful_clicked, funny_clicked, cool_clicked, date, review_text, count_checkin, user, rating) FROM '../data/reviewsCSV/16.csv' WITH HEADER = TRUE;

COPY reviews2 (id, useful_count, funny_count, cool_count, useful_clicked, funny_clicked, cool_clicked, date, review_text, count_checkin, user, rating) FROM '../data/reviewsCSV/17.csv' WITH HEADER = TRUE;

COPY reviews2 (id, useful_count, funny_count, cool_count, useful_clicked, funny_clicked, cool_clicked, date, review_text, count_checkin, user, rating) FROM '../data/reviewsCSV/18.csv' WITH HEADER = TRUE;

COPY reviews2 (id, useful_count, funny_count, cool_count, useful_clicked, funny_clicked, cool_clicked, date, review_text, count_checkin, user, rating) FROM '../data/reviewsCSV/19.csv' WITH HEADER = TRUE;
