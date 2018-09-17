import React from "react";
import styles from "./EmbedReviewForm.css";

const EmbedReviewForm = props => {
  const rating = props.current[0].ratings;
  const userStars = props.ratings.count_starRatings;
  console.log(props.ratings);
  return (
    <div>
      <h3>Embed This Review</h3>
      <hr />
      <div className={styles.formLayout2}>
        <label htmlFor="embed">
          Embedding Code
          <span>
            Add this review to your website by copying the code below.
          </span>
        </label>
        <input name="embed" type="text" className={styles.inputsForm1} />
      </div>
      <button className={styles.smallBtn}>Copy Code</button>
      <p className={styles.ePreview}>Preview</p>
      <div className={styles.eReview}>
        <p className={styles.resName}>{props.current[0].name}</p>
        <div
          className={
            rating === 5
              ? styles.ratings5
              : rating === 4
                ? styles.ratings4
                : rating === 3
                  ? styles.ratings3
                  : rating === 2
                    ? styles.ratings2
                    : rating === 1
                      ? styles.ratings1
                      : ""
          }
        />
        <span> {props.current[0].reviewsCount} reviews</span>
        <span className={styles.logo}>
          {""}
          yelp <i class="fab fa-yelp" />
        </span>
        <hr />
        <div className={styles.eUser}>
          <img src={props.user.profile_image} />
          <section>
            <p className={styles.resName}>{props.user.name}</p>
            <span>
              {" "}
              <i className="fa fa-users" aria-hidden="true" />{" "}
              {props.user.count_friends}{" "}
            </span>
            <span>
              <i className="fa fa-star" aria-hidden="true" />{" "}
              {props.user.count_reviews}
            </span>
          </section>
        </div>
        <div className={styles.eText}>
          <section
            className={
              userStars === 5
                ? styles.ratings5
                : userStars === 4
                  ? styles.ratings4
                  : userStars === 3
                    ? styles.ratings3
                    : userStars === 2
                      ? styles.ratings2
                      : userStars === 1
                        ? styles.ratings1
                        : ""
            }
          />
          <span className={styles.date}>
            {new Date(props.ratings.date)
              .toLocaleString()
              .replace(/:\d\d /, " ")
              .slice(0, 9)}
          </span>
          <p>{props.ratings.text_review + props.ratings.text_review + "..."}</p>
          <hr />
          <p>Read more on Yelp</p>
        </div>
      </div>
    </div>
  );
};

export default EmbedReviewForm;
