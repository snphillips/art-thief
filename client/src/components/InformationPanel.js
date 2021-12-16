import React from 'react';


export default function InformationPanel(props) {
    return (
      <aside className="info-panel">
        <p style={{display: props.displayIntroMessage}}className="intro-message">Be inspired by random items from the Cooper Hewitt Museum</p>
        <h2 style={{display: props.displayArtResultInfo}}className="item-title">{props.itemTitle}</h2>
        <p style={{display: props.displayArtResultInfo}}className="item-medium">{props.itemMedium}</p>
        <p style={{display: props.displayArtResultInfo}}className="item-information">{props.itemInfo}</p>
        <button 
          className="learn-more-button"
          style={{display: props.displayArtResultInfo}}
        >
          <a 
            href={props.learnMoreURL}
            >
              learn more about this item
          </a>
        </button>
        <br/>
        <br/>
        <br/>
      </aside> 
    );
}

