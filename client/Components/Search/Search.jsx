import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(e) {
    var updateList = e.target.value;
    this.setState({
      search: updateList
    });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleFilter} />
        <input
          type="submit"
          onClick={() => this.props.handleSearch(this.state.search)}
        />
      </div>
    );
  }
}

export default Search;
