import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  getGalleryItems = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then(response => {
      this.setState({
        galleryItems: response.data
      }).catch(error => {
        console.log(`error getting all gallery items`, error);
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg" alt="small goat"/>
      </div>
    );
  }
}

export default App;
