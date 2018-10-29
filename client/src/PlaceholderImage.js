import React, { Component } from 'react';

export default class PlaceholderImage extends Component {
  render() {
    return (

      <div style={this.props.parent_state.displayPlaceholderImage}>

        <img id="placeholder-image"
             alt="cooper hewitt building exterior"
             src="./images/Cooper-Hewitt_Museum02.png"
             onMouseOver={event => (event.currentTarget.src = "./images/Cooper-Hewitt_Museum.png")}
             onMouseOut={event => (
               event.currentTarget.src = "./images/Cooper-Hewitt_Museum02.png",
               event.animation = "fadein 3.0s")}

             />

      </div>

    );
  }
}


