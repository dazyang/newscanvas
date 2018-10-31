import React, { Component } from 'react'

class Canvas extends Component {
  render() {
    return (
          <div className="canvas"> 
            <div className="news-title">News Title</div>
            <div className="news-image">News Main Image</div>
            <div className="news-body">News Content
              <div className="quote">Extract Quotes</div>
            </div>
          </div>
    );
  }
}

export default Canvas;