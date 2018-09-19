import React, { Component } from "react";
import styles from "./Buttons.css";
import axios from "axios";

const Buttons = props => {
  return (
    <div className={styles.btnDiv}>
      {props.counts.vote ? (
        <p className={styles.thanks}>Thanks for your vote!</p>
      ) : (
        <p>Was this review ...?</p>
      )}
      <button
        className={
          props.counts.useful_clicked ? styles.clickBtn : styles.reactions
        }
        onClick={() => props.handleCount(props.counts._id, "useful")}
      >
        <i className="fas fa-lightbulb" /> {""}
        Useful{" "}
        {props.counts.useful_count > 0 ? props.counts.useful_count : null}
      </button>

      <button
        className={
          props.counts.funny_clicked ? styles.clickBtn : styles.reactions
        }
        onClick={() => props.handleCount(props.counts._id, "funny")}
      >
        <i className="far fa-grin" /> {""}
        Funny {props.counts.funny_count > 0 ? props.counts.funny_count : null}
      </button>

      <button
        className={
          props.counts.cool_clicked ? styles.clickBtn : styles.reactions
        }
        onClick={() => props.handleCount(props.counts._id, "cool")}
      >
        <i class="far fa-grin-wink" /> {""}
        Cool {props.counts.cool_count > 0 ? props.counts.cool_count : null}
      </button>
    </div>
  );
};

export default Buttons;
