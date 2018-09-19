import React, { Component } from "react";
import styles from "./Links.css";
const Links = props => {
  return (
    <div id={styles.linksContainer}>
      <ul>
        <li onClick={props.openModal}>
          <p onClick={props.handleFormOne} className={styles.atags}>
            <i className="fas fa-external-link-alt" /> Share review
          </p>
        </li>
        <hr />
        <li onClick={props.openModal}>
          <p onClick={props.handleFormTwo} className={styles.atags}>
            <i className="fa fa-angle-left" />
            <i className="fa fa-angle-right" /> Embed review
          </p>
        </li>
        <hr />
        <li onClick={props.openModal}>
          <p onClick={props.handleFormThree} className={styles.atags}>
            <i className="fas fa-award" /> {""} Compliment
          </p>
        </li>
        <hr />
        <li onClick={props.openModal}>
          <p onClick={props.handleFormFour} className={styles.atags}>
            <i className="fas fa-comment-alt" /> {""}
            {""}
            Send message
          </p>
        </li>
        <hr />
        <li onClick={props.openModal}>
          <p onClick={props.handleFormFive} className={styles.atags}>
            <i className="fas fa-user-plus" /> {""}
            {""}
            Follow {props.name}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Links;
