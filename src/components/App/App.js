import React, { Component } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';
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
      console.log(`GET response`, response.data);
      this.setState({
        galleryList: response.data
      })
      }).catch( error => {
        console.log(`error getting all gallery items`, error);
        alert(`error loading gallery items`);
      })
  }

  addGalleryItem = (newGalleryItem) => {
    axios({
      method: 'POST',
      url: '/gallery',
      data: newGalleryItem
    }).then ( response => {
      console.log(`POST response`);
      this.getGalleryItems();
    }).catch ( error => {
      console.log(`error adding new gallery item`, error);
      alert(`error adding new gallery item`);
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
        <GalleryForm  addGalleryItem={this.addGalleryItem}/>
        <br/>
          <GalleryList  list={this.state.galleryList}
                        updateLikes={this.updateLikes}
          />
      </div>
    );
  }
}

export default App;
