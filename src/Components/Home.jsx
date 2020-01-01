import React, { Component } from 'react';
import MailIcon from './MailIcon';
import LatestCollection from './LatestCollection';
import Menu from './Menu';

export default class Home extends Component {
  render() {
    return (
      <div className='homepage'>
        <Menu activeChangeHandler={this.props.activeChangeHandler} />
        <div className='aboveFold'>
          <div className='aboveFold_card'>
            <p className='aboveFold_card_content'>
              The best art you haven't yet discovered.
            </p>
            <div className='aboveFold_card_subscribe'>
              <input
                type='text'
                placeholder='EMAIL'
                className='aboveFold_card_subscribe_input'
              />
              <div className='aboveFold_card_subscribe_send'>
                <div className='aboveFold_card_subscribe_send_button'>
                  <p>Submit</p> <MailIcon />
                </div>
              </div>
            </div>
          </div>
          <div className='aboveFold_photo'></div>
        </div>
        <LatestCollection />
      </div>
    );
  }
}
