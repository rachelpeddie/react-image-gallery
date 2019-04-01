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
        event.preventDefault();
        this.props.addStudent(this.state);
        this.clearStudentFields();
    }

    render(){
        return(
            <form onSubmit={this.props.addGalleryItem}>
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