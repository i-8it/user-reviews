import React, { Component } from "react";
import styles from "./Modal.css";

const Modal = props => {
  return (
    <div
      id={styles.outerStyle}
      className={props.isModalOpen ? styles.block : styles.none}
    >
      <div
        id="outer"
        className={styles.overlay}
        onClick={e => props.windowCloseModal(e)}
      >
        <div onClick={props.closeModal} />
        <div className={styles.modal}>{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;
