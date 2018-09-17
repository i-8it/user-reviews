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
    return (
      <div className={styles.wrapper}>
        {this.props.current.map((cur, idx) => {
          return (
            <div>
              <hr /> <Review cur={cur} current={this.props.current} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default ReviewEntry;
