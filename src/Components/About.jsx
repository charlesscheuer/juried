import React, { Component } from 'react';
import Menu from './Menu';

export default class Home extends Component {
  render() {
    return (
      <div className='about'>
        <Menu
          about={true}
          activeChangeHandler={this.props.activeChangeHandler}
        />
        <div className='about'>
          <div className='about_card about_card-blue'>
            <p className='about_card_content about_card_content-about'>
              About Juried: Juried began in 2019 with the simple mission to
              highlight incredible art and put the artist and artisan at the
              center of the conversation. We believe the roots of a culture lie
              in its arts—its fine arts, its music, and its traditions—and we
              believe it is vital to turn back to those roots. Choice is power,
              and we want to make it easy to choose the cup that was formed from
              nothing between the thumb and forefinger of a skilled potter
              rather than one as generic as any other from a factory.
            </p>
          </div>
          <div className='about_card'>
            <p className='about_card_content'>
              What is Juried? Based on the age-old concept of the juried art
              show, Juried cuts through the chaos by carefully curating fine art
              for sale across the United States and delivering our a biweekly
              collection to your inbox. We work directly with new and
              established artisans who seek to grow their audiences and share
              their craft with the world, and in doing so we bring you the
              finest selection of multimedia artwork that we can.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
