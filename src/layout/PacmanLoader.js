import React from 'react';
import { css } from '@emotion/core';
// First way to import
import { ClipLoader, PacmanLoader } from 'react-spinners';
// Another way to import
import ClipLoader from 'react-spinners/ClipLoader';

const override = css`
    display: block;
    color: #F8E71C;
`;

class PacmanLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      color: '#F8E71C'
    }
  }
  render() {
    return (
      <div className='sweet-loading'>
        <ClipLoader
          css={override}
          sizeUnit={"px"}
          size={150}
          color= { '#F8E71C'}
          loading={this.state.loading}
        />
      </div> 
    )
  }
}
export default PacmanLoader;