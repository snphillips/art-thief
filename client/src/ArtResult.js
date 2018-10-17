import React, { Component } from 'react';


export default class ArtResult extends Component {
  render() {

  // Some variables to make this page easier to read.
  const date = this.props.parent_state.randomCooperDate
  const title = this.props.parent_state.randomCooperTitle
  const imageURL = this.props.parent_state.randomCooperImageURL



    return (

      <div className="ArtResult">
        <div className="cooper-title">{title}</div>
        <div className="cooper-date">{date}</div>
        <div className="cooper-image-URL">{imageURL}</div>
      </div>
    );
  }
}
