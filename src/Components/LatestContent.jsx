import React, { Component } from 'react';
import Pastel from '../images/pastel.jpg';
const stripe = window.Stripe('pk_test_i5Qb7C4stTfkIRHemyUnTuKC00Equ6aBeb');

// css in collection.scss
const Collection = [
  {
    image: Pastel,
    title: 'Pastel',
    description:
      'A much more elegant description of this item should go here, but it does not exist because I am an absolutely terrible copywriter. I will spare the reader and stick to code for now.',
    price: 450,
    sku: 2342323
  },
  {
    image: Pastel,
    title: 'Pastel',
    description:
      'A much more elegant description of this item should go here, but it does not exist because I am an absolutely terrible copywriter. I will spare the reader and stick to code for now.',
    price: 450,
    sku: 23423233223
  },
  {
    image: Pastel,
    title: 'Pastel',
    description:
      'A much more elegant description of this item should go here, but it does not exist because I am an absolutely terrible copywriter. I will spare the reader and stick to code for now.',
    price: 450,
    sku: 2342223
  }
];

export default class LatestContent extends Component {
  clickedBuy = () => {
    stripe.redirectToCheckout({
      items: [{ sku: 'sku_GTwqQEPTBdAyV8', quantity: 1 }],

      // Do not rely on the redirect to the successUrl for fulfilling
      // purchases, customers may not always reach the success_url after
      // a successful payment.
      // Instead use one of the strategies described in
      // https://stripe.com/docs/payments/checkout/fulfillment
      successUrl: 'https://xenodochial-hoover-fae576.netlify.com/#/shop',
      cancelUrl: 'https://xenodochial-hoover-fae576.netlify.com/#/shop',
      billingAddressCollection: 'required'
    });
  };

  render() {
    const { shopPage } = this.props;
    return (
      <div
        className={
          shopPage ? 'latestContent latestContent-shopPage' : 'latestContent'
        }
      >
        {Collection.map((item, index) => {
          return (
            <div
              key={item.sku}
              className={
                index % 2 === 0
                  ? 'latestContent_item'
                  : 'latestContent_item latestContent_item-odd'
              }
            >
              <div className='latestContent_item_info'>
                <img
                  src={item.image}
                  alt='the art '
                  className='latestContent_item-img'
                />
              </div>
              <div className='latestContent_item_description'>
                <div className='latestContent_item_description_row'>
                  <p className='latestContent_item_title'>{item.title}</p>

                  <p className='latestContent_item_price'>{`$${item.price}`}</p>
                  <button
                    className='latestContent_item_buy'
                    onClick={() => this.clickedBuy()}
                  >
                    Buy
                  </button>
                </div>

                <p className='latestContent_item_description-text'>
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
