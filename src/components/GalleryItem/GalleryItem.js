import React, {Component} from 'react';

class GalleryItem extends Component {
    render(){
        return (
            <section>
                <div key={this.props.item.id}>
                    <img src={this.props.item.path}
                    alt={this.props.item.description} />
                </div>
            </section>
        )
    }
}

export default GalleryItem;