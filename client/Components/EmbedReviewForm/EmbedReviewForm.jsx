import React from "react";
import styles from "./EmbedReviewForm.css";

const EmbedReviewForm = props => {
  const rating = props.average;
  const userStars = props.current.review.count_starRatings;
  const defaultVal =
    "<span class='yelp-review' data-review-id='I4AOXlup93T_cx-5dsyU3g' data-hostname='www.yelp.com'>Read <a href='https://www.yelp.com/user_details?userid=mmoUnXJ69_sD4S4e851KkQ' rel='nofollow noopener'>Nani R.</a>'s <a href='https://www.yelp.com/biz/phantom-ales-anaheim?hrid=I4AOXlup93T_cx-5dsyU3g' rel='nofollow noopener'>review</a> of <a href='https://www.yelp.com/biz/N7Cos0Y2w_i1tzDma66fNQ' rel='nofollow noopener'>Phantom Ales</a> on <a href='https://www.yelp.com' rel='nofollow noopener'>Yelp</a><script async='async' src='https://www.yelp.com/embed/widgets.js' type='text/javascript'></script></span>";
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
        <input
          name="embed"
          type="text"
          className={styles.inputsForm1}
          value={defaultVal}
        />
      </div>
      <button className={styles.smallBtn}>Copy Code</button>
      <p className={styles.ePreview}>Preview</p>
      <div className={styles.eReview}>
        <p className={styles.resName}>
          {props.current.name.charAt(0).toUpperCase() +
            props.current.name.slice(1)}
        </p>
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
        <span> {props.current.reviewsCount} reviews</span>
        <span className={styles.logo}>
          {""}
          yelp <i class="fab fa-yelp" />
        </span>
        <hr />
        <div className={styles.eUser}>
          <img src={props.current.review.user.profile_image} />
          <section>
            <p className={styles.resName}>{props.current.review.user.name}</p>
            <span>
              {" "}
              <i className="fa fa-users" aria-hidden="true" />{" "}
              {props.current.review.user.count_friends}{" "}
            </span>
            <span>
              <i className="fa fa-star" aria-hidden="true" />{" "}
              {props.current.review.user.count_reviews}
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
            {new Date(props.current.review.date)
              .toLocaleString()
              .replace(/:\d\d /, " ")
              .slice(0, 10)
              .replace(/,(\s+)?$/, "")}
          </span>
          <p>
            {props.current.review.text_review +
              props.current.review.text_review +
              "..."}
          </p>
          <hr />
          <p>Read more on Yelp</p>
        </div>
      </div>
    </div>
  );
};

export default EmbedReviewForm;
