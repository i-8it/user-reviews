import React from "react";
import styles from "./ShareReviewForm.css";
const ShareReviewForm = () => {
  return (
    <div>
      <h3>Share review</h3>
      <hr />
      <div className={styles.buttonGroup}>
        <button id={styles.facebookBtn} className={styles.buttons}>
          <i class="fab fa-facebook-f" /> {""} Share on Facebook
        </button>
        <button id={styles.twitterBtn} className={styles.buttons}>
          <i class="fab fa-twitter" /> {""}
          Share on Twitter
        </button>
      </div>
      <label className={styles.outerLabel}>
        <i className="fas fa-external-link-alt" />
        <input
          id={styles.inputForm1}
          type="text"
          value="https://www.yelp.com/biz/phantom-ales-anaheim?hrid=iFxAJ3IBLYkTI8cTpsSEzQ&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)"
        />
      </label>
      <fieldset className={styles.hrLine}>
        <legend>OR</legend>
      </fieldset>

      <div className={styles.formGroup}>
        <div className={styles.formLayout}>
          <label htmlFor="name">Your Name</label>
          <input name="name" type="text" className={styles.inputsForm1} />
        </div>
        <div className={styles.formLayout}>
          <label htmlFor="email">Your Email</label>
          <input name="email" type="text" className={styles.inputsForm1} />
        </div>
        <div className={styles.formLayout}>
          <label htmlFor="to">
            To <span>Email addressess</span>
          </label>
          <input name="to" type="text" className={styles.inputsForm1} />
        </div>
        <div className={styles.formLayout}>
          <label htmlFor="note">
            Add a note <span>Optional</span>
          </label>
          <textarea name="note" className={styles.inputsForm1} />
        </div>
      </div>
      <button className={styles.shareBtn}>Share</button>
    </div>
  );
};

export default ShareReviewForm;
