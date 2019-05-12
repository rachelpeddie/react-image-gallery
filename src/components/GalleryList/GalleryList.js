import React, {Component} from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';


class GalleryList extends Component {
    render(){
        return(
            <div className='container'>
                {this.props.list.map(item =>
                <GalleryItem    item={item}
                                key={item.id}
                                updateLikes={this.props.updateLikes}
                                className='grid-child'/>
                )}
            </div>
        )
    }
}

export default GalleryList;