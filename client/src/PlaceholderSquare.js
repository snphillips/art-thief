import React, { Component } from 'react';

export default class PlaceholderSquare extends Component {
  render() {
    return (

      <div id="placeholder-square" style={this.props.parent_state.displayPlaceholderSquare}></div>

    );
  }
}
