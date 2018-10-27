import React, { Component } from 'react';


export default class ArtResult extends Component {
  render() {

    return (

      <span className="ArtResult" style={this.props.parent_state.displayArtResultImage}>

        <img src={this.props.parent_state.imageURL}
             alt="random item from Cooper Hewitt collection based on search tag"
             className="image-URL"
             onClick={this.props.viewBigImage}/>


      </span>
    );
  }
}


