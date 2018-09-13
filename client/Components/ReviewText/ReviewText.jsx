import React from "react";
import styles from "./ReviewText.css";
const ReviewText = props => {
  return (
    <div className={styles.text}>
      <p>{props.review.text_review}</p>
    </div>
  );
};

export default ReviewText;
