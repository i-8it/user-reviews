import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReviewEntry from "./Components/ReviewEntry/ReviewEntry.jsx";
import Search from "./Components/Search/Search.jsx";
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
    console.log("current", this.state.current);
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

ReactDOM.render(<App />, document.getElementById("root"));
