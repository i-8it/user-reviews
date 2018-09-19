import React from "react";
import User from "../User/User.jsx";
import Ratings from "../Ratings/Ratings.jsx";
import ReviewText from "../ReviewText/ReviewText.jsx";
import Buttons from "../Buttons/Buttons.jsx";
import styles from "./Review.css";

const Review = props => {
  return (
    <div id={styles.reviewBlock}>
      <div className={styles.rateAndText}>
        <div id={styles.ratings}>
          <Ratings ratings={props.cur.review} />
        </div>
        <div id={styles.reviewText}>
          <ReviewText review={props.cur.review} />
        </div>
        <div>
          <Buttons counts={props.cur} handleCount={props.handleCount} />
        </div>
      </div>
      <div id={styles.users}>
        <User current={props.cur} average={props.average} />
      </div>
    </div>
  );
};
export default Review;
