import React, { Component } from 'react'

class SearchBar extends Component {
  render() {
    return (
      <div className="news-search">
        <h1>{'source of news'}</h1>
        <input className="search-bar" value="Search Keywords" />
      </div>
    );
  }
}

export default SearchBar;