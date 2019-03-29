import React, { Component } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import './App.css';

class App extends Component {
  state = {
    galleryList: []
  }

  getGalleryItems = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then( response => {
      console.log(`response`, response.data);
      this.setState({
        galleryList: response.data
      })
      }).catch( error => {
        console.log(`error getting all gallery items`, error);
      })
  }

  updateLikes = (id) => {
    axios({
      method: 'PUT',
      url: `/gallery/like/${id}`,
      data: id
    }).then( response  => {
      this.getGalleryItems();
    }).catch( error => {
      console.log(`error updating likes`, error);
      alert(`Something went wrong updating the gallery`);
    })
  }

componentDidMount () {
  console.log(`in componentDidMount...`);
  this.getGalleryItems();
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
          <GalleryList  list={this.state.galleryList}
                        updateLikes={this.updateLikes}
          />
      </div>
    );
  }
}

export default App;
