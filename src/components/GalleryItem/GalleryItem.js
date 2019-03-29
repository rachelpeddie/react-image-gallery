import React, {Component} from 'react';

class GalleryItem extends Component {
    
    state = {
        image: true
    }

    flip =() =>{
        if(this.state.image === true){
            console.log(`in image true...`);
                return (
                    <section>
                        <div key={this.props.item.id}>
                        <br />
                            <img onClick={ () => { this.handleSubmit() } } src={this.props.item.path}
                            alt={this.props.item.description} className='image-size' />
                        </div>
                    </section>
                )
        } else if (this.state.image === false){
            console.log(`in image false...`);
            
                return(
                    <h3 onClick={() => {this.handleSubmit()}}>{this.props.item.description}</h3>
                )
        }
    }

    handleSubmit = () =>{
        console.log(`in handleSubmit`);
        this.setState({
            image: !this.state.image
        })
    }


    render(){
        return(
            <section>
                <div key={this.props.item.id}>
                    {this.flip()}
                    <br />
                    <span>{this.props.item.likes} Love</span>
                    <br />
                    <button onClick={ () => {this.props.updateLikes( this.props.item.id )} }>Like me!</button>
                </div>
            </section>

        )
    }
}

export default GalleryItem;