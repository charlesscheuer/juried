import React, { Component } from 'react';
import Menu from './Menu';

export default class Home extends Component {
  render() {
    return (
      <div className='about_contain'>
        <Menu
          about={true}
          activeChangeHandler={this.props.activeChangeHandler}
        />
        <div className='about'>
          <div className='about_card-bottom policies'>
            <div className='about_card_header  about_card_header-bottom about_card_header-blue'>
              Shipping policy
            </div>
            <p className='about_card_content about_card_content-bottom'>
              Juried is a marketplace which works directly with artists and
              artisans, and as such all work is shipped by these sellers.
              Sellers set their own prices and their own shipping rates, though
              we maintain standards sellers must adhere to.
              <ul>
                <li>All packages must be equipped with a tracking number.</li>
                <li>
                  A pick-up option will always be available for local customers.
                </li>
              </ul>
              As a marketplace not responsible for the shipping and handling of
              the artworks, Juried is not responsible for items lost or damaged
              in shipment. We will do our utmost to work out a resolution
              between buyers and sellers when unfortunate circumstances arise.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
