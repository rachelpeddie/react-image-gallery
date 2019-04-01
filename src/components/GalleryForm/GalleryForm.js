import React, {Component} from 'react';

class GalleryForm extends Component {
    state = {
        newGalleryItem: {
            newPath: '',
            newDescription: ''
        }
    }

    handleChangeFor = (propertyName) => (event) => {
        this.setState({
            newGalleryItem: {
                ...this.state.newGalleryItem,
                [propertyName]: event.target.value,
            }
        })
    }

    handleSubmit = (event) => {
        console.log(this.state.newGalleryItem);
        
        event.preventDefault();
        this.props.addGalleryItem(this.state.newGalleryItem);
        this.setState({
            newGalleryItem: {
                newPath: '',
                newDescription: '',
            },
    })
}
    render(){
        console.log(`newGalleryItem`, this.state.newGalleryItem);
        
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="path-input">Image URL:</label>
                <input id="path-input" onChange={this.handleChangeFor('newPath')} />
                <label htmlFor="newDescription-input">Image Description:</label>
                <input id="newDescription-input" onChange={this.handleChangeFor('newDescription')} />
                <button type="submit">Done</button>
            </form>
        )
    }
}

export default GalleryForm;