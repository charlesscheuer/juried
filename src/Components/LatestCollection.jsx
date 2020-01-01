import React, { Component } from 'react';
import LatestContent from './LatestContent';
// css in collection.scss

export default class LatestCollection extends Component {
  render() {
    return (
      <div className='sticks'>
        <div className='latestHeader'>
          <p>Latest Collection: </p>
        </div>
        <LatestContent />
      </div>
    );
  }
}
