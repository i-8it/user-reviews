import React, { Component } from "react";
import "./User.css";
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="users">
        <div className="image">
          <img src={this.props.user.profile_image} className="avatars" />
        </div>
        <div className="userInfo">
          <a href="#" className="userLink">
            {this.props.user.name}
          </a>
          <p className="userLoc">
            {this.props.user.city}, {this.props.user.state}
          </p>
          <p className="userBio">
            <i class="fa fa-users" aria-hidden="true" />
            <span>{this.props.user.count_friends}</span>
            friends
          </p>
          <p className="userBio">
            <i class="fa fa-star" aria-hidden="true" />
            <span>{this.props.user.count_reviews}</span>
            reviews
          </p>
          <p className="userBio">
            <i class="fa fa-camera" aria-hidden="true" />
            <span>{this.props.user.count_photos}</span> photos
          </p>
        </div>
      </div>
    );
  }
}

export default User;
