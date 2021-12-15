import React from 'react';


export default function ArtResult(props) {
  return (

    <span className="ArtResult"
      style={props.parent_state.displayArtResultImage}
      >
        <img src={props.parent_state.imageURL}
          alt="random item from Cooper Hewitt collection based on search tag"
          className="image-URL"
          onClick={props.viewBigImage}
        />

      </span>
    );

}


