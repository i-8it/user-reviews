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
          <li>
            <p onClick={this.props.openModal} className={styles.atags}>
              <i id={styles.linkIcons} className="fas fa-external-link-alt" />{" "}
              Share review
            </p>
          </li>
          <hr />
          <li>
            <p onClick={this.props.openModal} className={styles.atags}>
              <i id={styles.linkIcons} className="fa fa-angle-left" />
              <i id={styles.linkIcons} className="fa fa-angle-right" /> Embed
              review
            </p>
          </li>
          <hr />
          <li>
            <p onClick={this.props.openModal} className={styles.atags}>
              <i id={styles.linkIcons} className="fas fa-award" /> {""}{" "}
              Compliment
            </p>
          </li>
          <hr />
          <li>
            <p onClick={this.props.openModal} className={styles.atags}>
              <i id={styles.linkIcons} className="fas fa-comment-alt" /> {""}
              {""}
              Send message
            </p>
          </li>
          <hr />
          <li>
            <p onClick={this.props.openModal} className={styles.atags}>
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
