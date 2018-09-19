import React, { Component } from "react";
import styles from "./Modal.css";

const Modal = props => {
  return (
    <div
      id={styles.outerStyle}
      onClick={props.closeModal}
      className={props.isModalOpen ? styles.block : styles.none}
    >
      <div className={styles.overlay}>
        <div onClick={props.closeModal} />
        <div className={styles.modalBro}>{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;
