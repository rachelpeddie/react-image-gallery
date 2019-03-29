import React, {Component} from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
    render(){
        return(
            <div>
                {this.props.list.map(item =>
                <GalleryItem    item={item}
                                key={item.id}
                                updateLikes={this.props.updateLikes}/>
                )}
            </div>
        )
    }
}

export default GalleryList;