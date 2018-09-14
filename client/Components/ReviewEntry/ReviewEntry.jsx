import React, { Component } from "react";
import Review from "../Review/Review.jsx";
import styles from "./ReviewEntry.css";
import Links from "../Links/Links.jsx";

class ReviewEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log(this.props.current);
    return (
      <div className={styles.wrapper}>
        {this.props.current.map((cur, idx) => {
          return (
            <div>
              <hr /> <Review cur={cur} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default ReviewEntry;
