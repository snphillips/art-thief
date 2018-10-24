import React, { Component } from 'react';


export default class ArtResult extends Component {
  render() {

  // Some variables to make this page easier to read.
  const imageURL = this.props.parent_state.imageURL
  const learnMoreURL = this.props.parent_state.learnMoreURL

    return (

      <div className="ArtResult" style={this.props.parent_state.displayArtResult}>

        <img src={imageURL}
             alt="random item from collection"
             className="image-URL"
             onClick={this.props.viewBigImage}/>

        <span className="item-description"></span>
        <div>
          <a href={learnMoreURL} className="learn-more-link">learn more about this item</a>
        </div>

      </div>
    );
  }
}

