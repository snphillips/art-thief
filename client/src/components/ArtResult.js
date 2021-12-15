import React from 'react';


export default function ArtResult(props) {
  return (

    <span className="ArtResult"
      style={{
        display: props.displayArtResultImage
      }}
      >
        <img 
          src={props.imageURL}
          alt="random item from Cooper Hewitt collection based on search tag"
          className="image-URL"
          onClick={props.viewBigImage}
        />

      </span>
    );

}


