import React from 'react';


export default function InformationPanel(props) {
    return (

        <aside className="info-panel">
          <p style={props.parent_state.displayIntroMessage}className="intro-message">Be inspired by random items from the Cooper Hewitt Museum</p>
          <h2 style={props.parent_state.displayArtResultInfo}className="item-title">{props.parent_state.itemTitle}</h2>
          <p style={props.parent_state.displayArtResultInfo}className="item-medium">{props.parent_state.itemMedium}</p>
          <p style={props.parent_state.displayArtResultInfo}className="item-information">{props.parent_state.itemInfo}</p>
          <p style={props.parent_state.displayArtResultInfo}><a className="learn-more-link" href={props.parent_state.learnMoreURL}>learn more about this item</a></p>
          <br/>
          <br/>
          <br/>
        </aside>
    );
}

