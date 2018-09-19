import React, { Component } from "react";
import styles from "./Ratings.css";
const Ratings = props => {
  const stars = props.ratings.count_starRatings;
  return (
    <div>
      <div>
        <div
          className={
            stars === 5
              ? styles.stars5
              : stars === 4
                ? styles.stars4
                : stars === 3
                  ? styles.stars3
                  : stars === 2
                    ? styles.stars2
                    : stars === 1
                      ? styles.stars1
                      : ""
          }
        />
        <span className={styles.date}>
          {new Date(props.ratings.date)
            .toLocaleString()
            .replace(/:\d\d /, " ")
            .slice(0, 10)
            .replace(/,(\s+)?$/, "")}
        </span>
        {props.ratings.count_checkin > 0 ? (
          <p className={styles.checkins}>
            <i
              id={styles.circle}
              className="fa fa-check-circle"
              aria-hidden="true"
            />{" "}
            {props.ratings.count_checkin} check-ins
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Ratings;
