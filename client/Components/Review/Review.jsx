import React, { Component } from "react";
import User from "../User/User.jsx";

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.cur.review.user);
    return (
      <div>
        <User user={this.props.cur.review.user} />
      </div>
    );
  }
}
export default Review;
