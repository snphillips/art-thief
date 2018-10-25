import React, { Component } from 'react';


export default class InformationPanel extends Component {
  render() {
    return (

        <aside className="info-panel">
          <br/>
          <p style={this.props.parent_state.displayIntroMessage}className="intro-message">Be inspired by random items from the Cooper Hewitt Museum</p>
          <h2 style={this.props.parent_state.displayArtResultInfo}className="item-title">{this.props.parent_state.itemTitle}</h2>
          <p style={this.props.parent_state.displayArtResultInfo}className="item-medium">{this.props.parent_state.itemMedium}</p>
          <p style={this.props.parent_state.displayArtResultInfo}className="item-information">{this.props.parent_state.itemInfo}</p>
          <p style={this.props.parent_state.displayArtResultInfo}><a className="learn-more-link" href={this.props.parent_state.learnMoreURL}>learn more about this item</a></p>
        </aside>
    );
  }
}

