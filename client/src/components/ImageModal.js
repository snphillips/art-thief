import React from 'react';

export default function ImageModal(props) {
  return (
    <div className="modal-background"
      style={{display: props.displayModal}}
      >
      <img 
        className="image-large"
        src={props.imageURL}
        onClick={props.closeBigImage}
        alt=""
      />
    </div>

  );
}
