import React, { Component } from "react";
import styles from "./Modal.css";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.isModalOpen);
    return (
      <div
        id={styles.outerStyle}
        className={this.props.isModalOpen ? styles.block : styles.none}
      >
        <div className={styles.overlay} onClick={this.props.closeModal}>
          <div onClick={this.props.closeModal} />
          <div className={styles.modal}>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Modal;
