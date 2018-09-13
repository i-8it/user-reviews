/* global document */
import React, { Component } from "react";
import ReviewEntry from "./ReviewEntry/ReviewEntry.jsx";
import Search from "./Search/Search.jsx";
import axios from "axios";
class App extends Component {
  constructor() {
    super();
    this.state = {
      allData: [],
      current: []
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(inputVal) {
    inputVal = inputVal.toLowerCase();
    var output = this.state.allData.filter(res => {
      return res.name.toLowerCase().includes(inputVal);
    });
    this.setState({
      current: output
    });
  }

  componentDidMount() {
    axios
      .get("/reviews")
      .then(response => {
        this.setState({
          allData: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Search handleSearch={this.handleSearch} />
        <ReviewEntry
          allData={this.state.allData}
          current={this.state.current}
        />
      </div>
    );
  }
}

export default App;
