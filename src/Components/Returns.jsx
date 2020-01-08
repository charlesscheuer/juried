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
              Returns and refunds policy
            </div>
            <p className='about_card_content about_card_content-bottom'>
              Juried works directly with artists and artisans. As such cannot
              offer returns under any circumstances and refunds for damage or
              fraud will be processed on a case by case basis. If a piece is
              damaged in transit, we will work with the customer and the seller
              to resolve the situation, but Juried is not responsible for the
              shipping and handling of artwork. If a customer receives a piece
              other than the one they ordered, we will refund the order and work
              with the customer and the seller to resolve the matter. The
              satisfaction of our customers is our priority, and we vet all
              artisans whose work is sold through Juried thoroughly before
              selecting them for our collection.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
