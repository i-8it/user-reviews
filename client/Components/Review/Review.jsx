import React, { Component } from "react";
import User from "../User/User.jsx";
import Ratings from "../Ratings/Ratings.jsx";
import ReviewText from "../ReviewText/ReviewText.jsx";
import styles from "./Review.css";

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.cur.review.user);
    return (
      <div id={styles.reviewBlock}>
        <div className={styles.rateAndText}>
          <div id={styles.ratings}>
            <Ratings ratings={this.props.cur.review} />
          </div>
          <div id={styles.reviewText}>
            <ReviewText review={this.props.cur.review} />
          </div>
        </div>
        <div id={styles.users}>
          <User user={this.props.cur.review.user} />
        </div>
      </div>
    );
  }
}
export default Review;
