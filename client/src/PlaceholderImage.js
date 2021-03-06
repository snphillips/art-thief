import React, { Component } from 'react';

export default class PlaceholderImage extends Component {
  render() {
    return (

      <div style={this.props.parent_state.displayPlaceholderImage}>

        <img id="placeholder-image"

             alt=""

             src="./images/Cooper-Hewitt_Museum02.png"

             onMouseOver={ (event) => {
               event.currentTarget.src = "https://i.imgur.com/IwBKBye.png"
             }}

             onMouseOut={ (event) => {
               event.currentTarget.src = "./images/Cooper-Hewitt_Museum02.png"
             }}

             />

      </div>

    );
  }
}


