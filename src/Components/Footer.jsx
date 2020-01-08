import React, { Component } from 'react';

import FooterEmail from './FooterEmail';

export default class Footer extends Component {
  // state for the footer subscription will be managed here
  render() {
    return (
      <div className='footer'>
        <div className='footer_links'>
          <div className='container container-1'>
            <div className='footer_about'>
              <h3 className='footer_links_email_newsletter_header'>About Us</h3>
              <p className='footer_links_email_newsletter_body'>
                Juried carefully curates fine art for sale delivers a monthly
                collection to your inbox.
              </p>
            </div>
            <div className='footer_menu'>
              <h3 className='footer_links_email_newsletter_header'>
                Quick links
              </h3>
              <ul className='footer_menu_list'>
                <li
                  onClick={() => this.props.activeChangeHandler('shipping')}
                  className='footer_menu_list_item'
                >
                  Shipping
                </li>
                <li
                  onClick={() => this.props.activeChangeHandler('returns')}
                  className='footer_menu_list_item'
                >
                  Returns
                </li>
              </ul>
            </div>
          </div>

          <div className='container'>
            <div className='footer_menu'>
              <h3 className='footer_links_email_newsletter_header'>
                Shop menu
              </h3>
              <ul className='footer_menu_list'>
                <li
                  onClick={() => this.props.activeChangeHandler('home')}
                  className='footer_menu_list_item'
                >
                  Home
                </li>
                <li
                  onClick={() => this.props.activeChangeHandler('about')}
                  className='footer_menu_list_item'
                >
                  About
                </li>
                <li
                  onClick={() => this.props.activeChangeHandler('shop')}
                  className='footer_menu_list_item'
                >
                  Shop
                </li>
                <li
                  onClick={() => this.props.activeChangeHandler('contact')}
                  className='footer_menu_list_item'
                >
                  Contact
                </li>
              </ul>
            </div>
            <FooterEmail />
          </div>
        </div>
        <div className='footer_copy'>
          <p>© 2019 JURIED. All rights reserved.</p>
        </div>
      </div>
    );
  }
}
