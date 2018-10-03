/*
cqlsh -f insert.sql;
*/

USE yelp;


COPY restaurants (id, useful_count, funny_count, cool_count, useful_clicked, funny_clicked, cool_clicked, date, review_text, count_checkin, user, rating) FROM '../data/reviewsCSV/01.csv' WITH HEADER = TRUE;

COPY restaurants (id, useful_count, funny_count, cool_count, useful_clicked, funny_clicked, cool_clicked, date, review_text, count_checkin, user, rating) FROM '../data/reviewsCSV/02.csv' WITH HEADER = TRUE;

COPY restaurants (id, useful_count, funny_count, cool_count, useful_clicked, funny_clicked, cool_clicked, date, review_text, count_checkin, user, rating) FROM '../data/reviewsCSV/03.csv' WITH HEADER = TRUE;

COPY restaurants (id, useful_count, funny_count, cool_count, useful_clicked, funny_clicked, cool_clicked, date, review_text, count_checkin, user, rating) FROM '../data/reviewsCSV/04.csv' WITH HEADER = TRUE;

COPY restaurants (id, useful_count, funny_count, cool_count, useful_clicked, funny_clicked, cool_clicked, date, review_text, count_checkin, user, rating) FROM '../data/reviewsCSV/05.csv' WITH HEADER = TRUE;

COPY restaurants (id, useful_count, funny_count, cool_count, useful_clicked, funny_clicked, cool_clicked, date, review_text, count_checkin, user, rating) FROM '../data/reviewsCSV/06.csv' WITH HEADER = TRUE;

COPY restaurants (id, useful_count, funny_count, cool_count, useful_clicked, funny_clicked, cool_clicked, date, review_text, count_checkin, user, rating) FROM '../data/reviewsCSV/07.csv' WITH HEADER = TRUE;

COPY restaurants (id, useful_count, funny_count, cool_count, useful_clicked, funny_clicked, cool_clicked, date, review_text, count_checkin, user, rating) FROM '../data/reviewsCSV/08.csv' WITH HEADER = TRUE;

COPY restaurants (id, useful_count, funny_count, cool_count, useful_clicked, funny_clicked, cool_clicked, date, review_text, count_checkin, user, rating) FROM '../data/reviewsCSV/09.csv' WITH HEADER = TRUE;
