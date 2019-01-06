import React, { Component } from 'react';
import './App.css';

// import Card from '@material-ui/core/Card';
import SearchBar from './components/SearchBar.jsx';
import Canvas from './components/Canvas.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <SearchBar />
          <Canvas />
          <button className="download-btn">Download as PDF</button>
        </div>
      </div>
    );
  }
}

export default App;
