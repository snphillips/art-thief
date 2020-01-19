import React from 'react';

export default function ImageModal(props) {
  return (
    <div className="modal-background" style={props.parent_state.displayModal}>
      <img className="image-large" src={props.parent_state.imageURL} onClick={props.closeBigImage} alt="" />
    </div>
  );
}
