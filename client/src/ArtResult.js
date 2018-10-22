import React, { Component } from 'react';


export default class ArtResult extends Component {
  render() {

  // Some variables to make this page easier to read.
  const date = this.props.parent_state.randomCooperDate
  const title = this.props.parent_state.randomCooperTitle
  const imageURL = this.props.parent_state.randomCooperImageURL
  const url = this.props.parent_state.randomCooperURL

    return (
      <div className="ArtResult" style={this.props.parent_state.displayArtResult}>
        <img src={imageURL} alt="random item from collection"className="cooper-image-URL"onClick={this.props.viewBigImage}/>
        <div ><a href={url} className="cooper-learn-more-link">learn more about this item</a></div>
      </div>
    );
  }
}



        // <div className="cooper-title">{title}</div>
        // <div className="cooper-date">{date}</div>
