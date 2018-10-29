import React, { Component } from 'react';

export default class PlaceholderImage extends Component {
  render() {
    return (

      <div style={this.props.parent_state.displayPlaceholderImage}>

        <img id="placeholder-image"
             src="./images/Cooper-Hewitt_Museum02.png"
             alt="cooper hewitt building exterior" />

      </div>

    );
  }
}



