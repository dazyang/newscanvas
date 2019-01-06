import React, { Component } from 'react'

class SearchBar extends Component {
  render() {
    return (
      <div className="news-search">
        <h1>newscanvas</h1>
        <input className="search-bar" value="Search keywords" />
      </div>
    );
  }
}

export default SearchBar;