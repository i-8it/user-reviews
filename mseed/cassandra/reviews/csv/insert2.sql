/*
cqlsh -f insert.sql;
*/

USE yelp;

COPY reviews2 (id, useful_count, funny_count, cool_count, useful_clicked, funny_clicked, cool_clicked, date, review_text, count_checkin, user, rating) FROM '../data/reviewsCSV/20.csv' WITH HEADER = TRUE;

COPY reviews2 (id, useful_count, funny_count, cool_count, useful_clicked, funny_clicked, cool_clicked, date, review_text, count_checkin, user, rating) FROM '../data/reviewsCSV/21.csv' WITH HEADER = TRUE;

COPY reviews2 (id, useful_count, funny_count, cool_count, useful_clicked, funny_clicked, cool_clicked, date, review_text, count_checkin, user, rating) FROM '../data/reviewsCSV/22.csv' WITH HEADER = TRUE;

COPY reviews2 (id, useful_count, funny_count, cool_count, useful_clicked, funny_clicked, cool_clicked, date, review_text, count_checkin, user, rating) FROM '../data/reviewsCSV/23.csv' WITH HEADER = TRUE;

COPY reviews2 (id, useful_count, funny_count, cool_count, useful_clicked, funny_clicked, cool_clicked, date, review_text, count_checkin, user, rating) FROM '../data/reviewsCSV/24.csv' WITH HEADER = TRUE;

COPY reviews2 (id, useful_count, funny_count, cool_count, useful_clicked, funny_clicked, cool_clicked, date, review_text, count_checkin, user, rating) FROM '../data/reviewsCSV/25.csv' WITH HEADER = TRUE;

COPY reviews2 (id, useful_count, funny_count, cool_count, useful_clicked, funny_clicked, cool_clicked, date, review_text, count_checkin, user, rating) FROM '../data/reviewsCSV/26.csv' WITH HEADER = TRUE;

COPY reviews2 (id, useful_count, funny_count, cool_count, useful_clicked, funny_clicked, cool_clicked, date, review_text, count_checkin, user, rating) FROM '../data/reviewsCSV/27.csv' WITH HEADER = TRUE;

COPY reviews2 (id, useful_count, funny_count, cool_count, useful_clicked, funny_clicked, cool_clicked, date, review_text, count_checkin, user, rating) FROM '../data/reviewsCSV/28.csv' WITH HEADER = TRUE;

COPY reviews2 (id, useful_count, funny_count, cool_count, useful_clicked, funny_clicked, cool_clicked, date, review_text, count_checkin, user, rating) FROM '../data/reviewsCSV/29.csv' WITH HEADER = TRUE;
