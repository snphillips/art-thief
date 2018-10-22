import React, { Component } from 'react';


export default class ImageModal extends Component {
  render() {



    return (


      <div className="modal-background" style={this.props.parent_state.showModal}>

      <span className="close-modal">&times;</span>

      <img className="image-large" src={this.props.parent_state.imageURL}/>

  </div>

    );
  }
}
