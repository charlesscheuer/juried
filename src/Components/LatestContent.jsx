import React, { Component } from 'react';
import Pastel from '../images/pastel.jpg';
// css in collection.scss

export default class LatestContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recentItems: [
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
      ]
    };
  }
  render() {
    const { shopPage } = this.props;
    return (
      <div
        className={
          shopPage ? 'latestContent latestContent-shopPage' : 'latestContent'
        }
      >
        {this.state.recentItems.map((item, index) => {
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
