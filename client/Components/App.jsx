/* global document */
import React, { Component } from "react";
import ReviewEntry from "./ReviewEntry/ReviewEntry.jsx";
// import Search from "./Search/Search.jsx";
import styles from "./App.css";
import axios from "axios";

console.log('loaded newrelic in server.js');

class App extends Component {
  constructor() {
    super();
    this.state = {
      allData: [],
      current: [],
      average: 0
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleCount = this.handleCount.bind(this);
    // this.handlePost = this.handlePost.bind(this);
    this.handleAverage = this.handleAverage.bind(this);
  }

  handleSearch(inputVal) {
    inputVal = inputVal.toLowerCase();
    var output = this.state.allData.filter(res => {
      return res.name.toLowerCase().includes(inputVal);
    });
    this.handleAverage(output);
    this.setState({
      current: output
    });
  }

  handleAverage(output) {
    var current = output;
    var total = 0;
    var average = 0;
    current.map(c => {
      total += c.review.count_starRatings;
      average = Math.round(total / current.length);
    });
    this.setState({ average: average });
  }

  handleCount(id, btn) {
    let one = 1;
    const updatedReviews = this.state.current;
    for (var i = 0; i < updatedReviews.length; i++) {
      const curReview = updatedReviews[i];
      if (id === curReview._id) {
        if (btn === "useful") {
          curReview.useful_count = curReview.useful_clicked
            ? curReview.useful_count - 1
            : curReview.useful_count + 1;
          curReview.useful_clicked = !curReview.useful_clicked;
        }
        if (btn === "funny") {
          curReview.funny_count = curReview.funny_clicked
            ? curReview.funny_count - 1
            : curReview.funny_count + 1;
          curReview.funny_clicked = !curReview.funny_clicked;
        }
        if (btn === "cool") {
          curReview.cool_count = curReview.cool_clicked
            ? curReview.cool_count - 1
            : curReview.cool_count + 1;
          curReview.cool_clicked = !curReview.cool_clicked;
        }
        curReview.vote = true;
      }
    }
    this.setState({ current: updatedReviews });
    // this.handlePost(updatedReviews);
  }

  // handlePost(data) {
  //   axios
  //     .post("/reviews", {
  //       data: data
  //     })
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  componentDidMount() {
    var id = window.location.pathname;
    id = id.substring(1, id.length - 1).toLowerCase();
    if (id !== undefined) {
      axios
        .get(`/api/reviews/${id}`)
        .then(response => {
          console.log(response);
          const current = response.data.map(rev => {
            rev.vote = false;
            return rev;
          });
          this.setState({
            current
          });
          this.handleAverage(current);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  render() {
    return (
      <div id={styles.wrapper}>
        {/* <Search handleSearch={this.handleSearch} /> */}
        {this.state.current.length > 0 && (
          <ReviewEntry
            current={this.state.current}
            handleCount={this.handleCount}
            average={this.state.average}
          />
        )}
      </div>
    );
  }
}

export default App;
