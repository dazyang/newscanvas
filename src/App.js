import React, { Component } from 'react';
import './App.css';

// import Card from '@material-ui/core/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className="news-search">
            <h1>{'source of news'}</h1>
            <input className="search-bar" value="Search Keywords"/>
          </div>
          <div className="canvas">
            {'Loading news'}
          </div>
          <button className="download-btn">Download as PDF</button>
        </div>
      </div>
    );
  }
}

export default App;
