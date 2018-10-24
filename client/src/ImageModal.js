import React, { Component } from 'react';


export default class ImageModal extends Component {
  render() {
    return (

      <div className="modal-background" style={this.props.parent_state.displayModal}>
        <img className="image-large" src={this.props.parent_state.imageURL} onClick={this.props.closeBigImage} alt=""/>
      </div>

    );
  }
}
