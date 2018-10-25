import React, { Component } from 'react';


export default class InformationPanel extends Component {
  render() {
    return (

        <aside className="info-panel">
          <br/>
          <p className="item-title">{this.props.parent_state.itemTitle}</p>
          <p className="item-medium">{this.props.parent_state.itemMedium}</p>
          <p className="item-information">{this.props.parent_state.itemInfo}</p>
          <p style={this.props.parent_state.displayArtResult}><a className="learn-more-link" href={this.props.parent_state.learnMoreURL}>learn more about this item</a></p>
        </aside>
    );
  }
}
          // <p className="intro-message">Be inspired by a random item from the Cooper Hewitt Museum.</p>
