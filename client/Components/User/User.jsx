import React, { Component } from "react";
import styles from "./User.css";
import Modal from "../Modal/Modal.jsx";
import Links from "../Links/Links.jsx";
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  // close modal (set isModalOpen, true)
  closeModal() {
    this.setState({
      isModalOpen: false
    });
  }

  // open modal (set isModalOpen, false)
  openModal() {
    this.setState({
      isModalOpen: true
    });
  }

  render() {
    return (
      <div id={styles.usersContainer}>
        <div className={styles.users}>
          <div className={styles.image}>
            <img
              src={this.props.user.profile_image}
              className={styles.avatars}
            />
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
              <span> {this.props.user.count_friends} </span>
              friends
            </p>
            <p className={styles.userBio}>
              <i id={styles.icons} className="fa fa-star" aria-hidden="true" />
              <span> {this.props.user.count_reviews} </span>
              reviews
            </p>
            <p className={styles.userBio}>
              <i
                id={styles.icons}
                className="fa fa-camera"
                aria-hidden="true"
              />
              <span> {this.props.user.count_photos} </span>
              photos
            </p>
          </div>
        </div>
        <Modal
          isModalOpen={this.state.isModalOpen}
          closeModal={this.closeModal}
        >
          <h1>hello</h1>
          <button onClick={this.closeModal}>Close</button>
        </Modal>
        <div className={styles.listOfLinks}>
          <Links openModal={this.openModal} name={this.props.user.name} />
        </div>
      </div>
    );
  }
}

export default User;
