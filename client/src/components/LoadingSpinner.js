import React from 'react';
import { css } from 'emotion';
//react-spinners is an npm package
import { ScaleLoader } from 'react-spinners';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

export default class LoadingSpinner extends React.Component {
  render() {
    return (
      <span className='sweet-loading'>
        <ScaleLoader
          className={override}
          sizeUnit={"px"}
          // size={32}
          height={32}
          color={'#000'}
          loading={this.props.loading}
        />
      </span>
    )
  }
}
