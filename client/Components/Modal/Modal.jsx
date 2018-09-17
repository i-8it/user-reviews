import React, { Component } from "react";
import styles from "./Modal.css";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        id={styles.outerStyle}
        className={this.props.isModalOpen ? styles.block : styles.none}
      >
        <div className={styles.overlay} onClick={this.props.closeModal}>
          <div onClick={this.props.closeModal} />
          <div className={styles.modalBro}>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Modal;
