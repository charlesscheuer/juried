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
          <div className='about_card about_card-blue'>
            <div className='about_card_header'>About Juried</div>
            <p className='about_card_content about_card_content-about'>
              Juried began in 2019 with the simple mission to highlight
              incredible art and put the artist and artisan at the center of the
              conversation. We believe the roots of a culture lie in its
              arts—its fine arts, its music, and its traditions—and we believe
              it is vital to turn back to those roots. Choice is power, and we
              want to make it easy to choose the cup that was formed from
              nothing between the thumb and forefinger of a skilled potter
              rather than one as generic as any other from a factory.
            </p>
          </div>
          <div className='about_photo'></div>
        </div>
        <div className='about about-2'>
          <div className='about_photo about_photo-2'></div>
          <div className='about_card'>
            <div className='about_card_header about_card_header-2 about_card_header-blue'>
              What is Juried?
            </div>
            <p className='about_card_content about_card_content-2'>
              Based on the age-old concept of the juried art show, Juried cuts
              through the chaos by carefully curating fine art for sale across
              the United States and delivering our a biweekly collection to your
              inbox. We work directly with new and established artisans who seek
              to grow their audiences and share their craft with the world, and
              in doing so we bring you the finest selection of multimedia
              artwork that we can.
            </p>
          </div>
        </div>
        <div className='about'>
          <div className='about_card-bottom'>
            <div className='about_card_header  about_card_header-bottom about_card_header-blue'>
              Who are we?
            </div>
            <p className='about_card_content about_card_content-bottom'>
              Two students named Tys and Charlie. We are young entrepreneurs and
              lifelong believers in the importance of the fine arts, and we want
              to see the creations of hardworking artisans put front-and-center
              in a world where large brands dominate every sector of the economy
              and virtually everyone has access to a camera.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
