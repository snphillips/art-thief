import React from 'react';
import { jsx, css } from '@emotion/react'
// react-spinners is an npm package
import { ScaleLoader } from 'react-spinners';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

export default function LoadingSpinner(props) {
  return (
    <span className='sweet-loading'>
      <ScaleLoader
        className={override}
        sizeUnit={"px"}
        height={32}
        color={'#000'}
        loading={props.loading}
      />
    </span>
  )
}
