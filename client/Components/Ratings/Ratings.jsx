import React, { Component } from "react";
import styles from "./Ratings.css";
class Ratings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const stars = this.props.ratings.count_starRatings;
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
          />{" "}
          <span className={styles.date}>
            {new Date(this.props.ratings.date)
              .toLocaleString()
              .replace(/:\d\d /, " ")
              //   .replace(",", " -")
              .slice(0, 8)}
          </span>
          {this.props.ratings.count_checkin > 0 ? (
            <p className={styles.checkins}>
              <i
                id={styles.circle}
                className="fa fa-check-circle"
                aria-hidden="true"
              />{" "}
              {this.props.ratings.count_checkin} check-ins
            </p>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Ratings;
