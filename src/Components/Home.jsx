import React, { Component } from 'react';
import MailIcon from './MailIcon';
import LatestCollection from './LatestCollection';
import logo from '../images/juried logo-01.svg';

export default class Home extends Component {
  render() {
    return (
      <div className='homepage'>
        <div className='homepage_menu'>
          <img className='homepage_photo-logo' src={logo} alt='logo' />
          <ul className='homepage_menu_list'>
            <li
              onClick={() => this.props.activeChangeHandler('home')}
              className='homepage_menu_list_item'
            >
              Home
            </li>
            <li
              onClick={() => this.props.activeChangeHandler('about')}
              className='homepage_menu_list_item'
            >
              About
            </li>
            <li className='homepage_menu_list_item'>Shop</li>
            <li className='homepage_menu_list_item'>Contact</li>
          </ul>
        </div>
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
              <div className='aboveFold_card_subscribe_rect'></div>
              <div className='aboveFold_card_subscribe_send'>
                <input
                  type='checkbox'
                  className='aboveFold_card_subscribe_send_check'
                />
                <p className='aboveFold_card_subscribe_send_info'>
                  I have read and agree to the{' '}
                  <span className='aboveFold_card_subscribe_send_info-underline'>
                    privacy conditions.
                  </span>
                </p>
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
