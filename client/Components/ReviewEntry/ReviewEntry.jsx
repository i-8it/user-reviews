import React, { Component } from "react";
import Review from "../Review/Review.jsx";
import "./ReviewEntry.css";

class ReviewEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log(this.props.current);
    return (
      <div className="wrapper">
        {this.props.current.map((cur, idx) => {
          return (
            <div>
              <hr /> <Review cur={cur} /> <hr />
            </div>
          );
        })}
      </div>
    );
  }
}

export default ReviewEntry;
