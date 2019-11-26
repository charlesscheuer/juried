import React, { Component } from 'react';
import logo from '../images/juried logo-01.svg';

export default class Home extends Component {
  render() {
    return (
      <div className='about'>
        <div className='about_menu'>
          <img className='about_photo-logo' src={logo} alt='logo' />
          <ul className='about_menu_list'>
            <li
              onClick={() => this.props.activeChangeHandler('home')}
              className='about_menu_list_item'
            >
              Home
            </li>
            <li
              onClick={() => this.props.activeChangeHandler('about')}
              className='about_menu_list_item'
            >
              About
            </li>
            <li className='about_menu_list_item'>Shop</li>
            <li className='about_menu_list_item'>Contact</li>
          </ul>
        </div>
        <div className='about'>
          <div className='about_photo'></div>
          <div className='about_card'>
            <p className='about_card_content'>About information goes here.</p>
          </div>
        </div>
      </div>
    );
  }
}
