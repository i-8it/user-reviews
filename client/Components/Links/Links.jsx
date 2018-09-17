import React, { Component } from "react";
import styles from "./Links.css";
class Links extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id={styles.linksContainer}>
        <ul>
          <li onClick={this.props.openModal}>
            <p onClick={this.props.handleFormOne} className={styles.atags}>
              <i id={styles.linkIcons} className="fas fa-external-link-alt" />{" "}
              Share review
            </p>
          </li>
          <hr />
          <li onClick={this.props.openModal}>
            <p onClick={this.props.handleFormTwo} className={styles.atags}>
              <i id={styles.linkIcons} className="fa fa-angle-left" />
              <i id={styles.linkIcons} className="fa fa-angle-right" /> Embed
              review
            </p>
          </li>
          <hr />
          <li onClick={this.props.openModal}>
            <p onClick={this.props.handleFormThree} className={styles.atags}>
              <i id={styles.linkIcons} className="fas fa-award" /> {""}{" "}
              Compliment
            </p>
          </li>
          <hr />
          <li onClick={this.props.openModal}>
            <p onClick={this.props.handleFormFour} className={styles.atags}>
              <i id={styles.linkIcons} className="fas fa-comment-alt" /> {""}
              {""}
              Send message
            </p>
          </li>
          <hr />
          <li onClick={this.props.openModal}>
            <p onClick={this.props.handleFormFive} className={styles.atags}>
              <i id={styles.linkIcons} className="fas fa-user-plus" /> {""}
              {""}
              Follow {this.props.name}
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Links;
