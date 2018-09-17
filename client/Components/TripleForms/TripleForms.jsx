import React, { Component } from "react";
import styles from "./TripleForms.css";
const TripleForms = props => {
  return (
    <div className={styles.tripleForms}>
      {props.three ? (
        <h3>Sign up to compliment {props.user.name}</h3>
      ) : props.four ? (
        <h3>Sign up to message {props.user.name}</h3>
      ) : props.five ? (
        <h3>Sign up to follow {props.user.name}</h3>
      ) : null}
      <p>
        By signing up, you agree to Yelp’s <span>Terms of Service</span> and
        <span> Privacy Policy.</span>
      </p>
      <div className={styles.buttonsGrp}>
        <button id={styles.facebookBtn} className={styles.btn}>
          <i class="fab fa-facebook-f" /> {""} Sign Up with Facebook
        </button>
        <button id={styles.googleBtn} className={styles.btn}>
          <i class="fab fa-google" /> {""}
          Sign Up with Google
        </button>
      </div>
      <p>Don't worry, we never post without your permission.</p>
      <fieldset className={styles.hrLine2}>
        <legend>OR</legend>
      </fieldset>
      <div className={styles.formGroup}>
        <section className={styles.names}>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </section>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="text" placeholder="ZIP Code" />
        <section className={styles.bDates}>
          <label>
            Birthday <span>Optional</span>
          </label>
          <select>
            <option selected>Month</option>
          </select>
          <select>
            <option selected>Day</option>
          </select>
          <select>
            <option selected>Year</option>
          </select>
        </section>
        <button className={styles.signUp}>Sign Up</button>
        <p>
          Already on Yelp? <span>Log in</span>
        </p>
      </div>
    </div>
  );
};

export default TripleForms;
