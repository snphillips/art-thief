import React from 'react';

export default function PlaceholderImage(props) {
  return (
    <div style={props.parent_state.displayPlaceholderImage}>
      <img
        id="placeholder-image"
        alt=""
        src="./images/Cooper-Hewitt_Museum02.png"
        onMouseOver={(event) => { event.currentTarget.src = "https://i.imgur.com/IwBKBye.png" }}
        onMouseOut={(event) => { event.currentTarget.src = "./images/Cooper-Hewitt_Museum02.png" }}
      />
    </div>
  );
}


