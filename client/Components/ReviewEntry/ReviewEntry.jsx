import React, { Component } from "react";
import Review from "../Review/Review.jsx";
import styles from "./ReviewEntry.css";

class ReviewEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log(this.props.current);
    return (
      <div className={styles.wrapper}>
        {this.props.current.map((cur, idx) => {
          return (
            <div>
              <hr /> <Review cur={cur} />
              <div id={styles.listOfLinks}>
                {/* <ul>
                  <li>
                    <a href="#">uno</a>
                  </li>
                  <hr />
                  <li>
                    <a href="#">uno</a>
                  </li>
                  <hr />
                  <li>
                    <a href="#">uno</a>
                  </li>
                  <li>
                    <a href="#">uno</a>
                  </li>
                </ul> */}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ReviewEntry;
