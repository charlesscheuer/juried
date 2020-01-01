import React, { Component } from 'react';
import LatestContent from './LatestContent';
import Menu from './Menu';

export default class Home extends Component {
  render() {
    return (
      <div className='homepage'>
        <Menu
          about={true}
          activeChangeHandler={this.props.activeChangeHandler}
        />
        <LatestContent shopPage={true} />
      </div>
    );
  }
}
