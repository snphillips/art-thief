import React, { Component } from 'react';


export default class InformationPanel extends Component {
  render() {
    return (

        <aside className="info-panel">
          <p className="intro-message">Be inspired by a random item from the Cooper Hewitt Museum.</p>
          <p className="item-information"></p>
          <p><a href={this.props.parent_state.learnMoreURL} className="learn-more-link">learn more about this item</a></p>
        </aside>
    );
  }
}
