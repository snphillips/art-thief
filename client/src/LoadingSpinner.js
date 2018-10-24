import React from 'react';
import { css } from 'react-emotion';
//react-spinners is an npm package
import { ScaleLoader } from 'react-spinners';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

export default class LoadingSpinner extends React.Component {
  render() {
    console.log("loading:", this.props.loading)
    return (
      <div className='sweet-loading'>
        <ScaleLoader
          className={override}
          sizeUnit={"px"}
          // size={32}
          height={32}
          color={'#000'}
          loading={this.props.loading}
        />
      </div>
    )
  }
}
