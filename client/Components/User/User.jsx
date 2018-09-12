import React, { Component } from "react";
import styles from "./User.css";
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.users}>
        <div className={styles.image}>
          <img src={this.props.user.profile_image} className={styles.avatars} />
        </div>
        <div className={styles.userInfo}>
          <a href="#" className={styles.userLink}>
            {this.props.user.name}
          </a>
          <p className={styles.userLoc}>
            {this.props.user.city}, {this.props.user.state}
          </p>
          <p className={styles.userBio}>
            <i id={styles.icons} className="fa fa-users" aria-hidden="true" />
            <span>{this.props.user.count_friends}</span>
            friends
          </p>
          <p className={styles.userBio}>
            <i id={styles.icons} className="fa fa-star" aria-hidden="true" />
            <span>{this.props.user.count_reviews}</span>
            reviews
          </p>
          <p className={styles.userBio}>
            <i id={styles.icons} className="fa fa-camera" aria-hidden="true" />
            <span>{this.props.user.count_photos}</span>
            photos
          </p>
        </div>
      </div>
    );
  }
}

export default User;
