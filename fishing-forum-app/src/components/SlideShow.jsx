import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './scss/SlideShow.scss'


import  image1  from './img/home/01.jpg';
import  image2  from './img/home/02.jpg';
import  image3  from './img/home/03.jpg';
import  image4  from './img/home/04.jpg';
import  image5  from './img/home/05.jpg';
import  image6  from './img/home/06.jpg';
import  image7  from './img/home/07.jpg';
import  image8  from './img/home/08.jpg';
import  image9  from './img/home/09.jpg';
import  image10  from './img/home/10.jpg';
import  image11  from './img/home/11.jpg';
import  image12  from './img/home/12.jpg';

 



class Responsive extends Component {
  render() {
    let settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 12,
            slidesToScroll: 0,
            infinite: true,
            dots: false,
            vertical: true
          }
        }
        /*,
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }*/
      ]
      };
     
  
    return (
      <div className='slideshow_wrap'>
        <h2 className='slideshow__title'> Follow Us on Instagram:</h2>
        <h3 className='slideshow__subtitle'>@oth_fishingforum </h3>

        <Slider {...settings}>
          <div>
            <div className='slide-item'
              style={{
                backgroundImage: `url('${image1}')`,
                backgroundSize: `cover`
              }}>
             <p className="slide-item__text">@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com</p> 
              </div>
          </div>
          <div>
          <div className='slide-item'
              style={{
                backgroundImage: `url('${image2}')`,
                backgroundSize: `cover`
              }}>
              <p className="slide-item__text">@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com</p> 
              </div>
          </div>
          <div>
          <div className='slide-item'
              style={{
                backgroundImage: `url('${image3}')`,
                backgroundSize: `cover`
              }}>
              <p className="slide-item__text">@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com</p> 
              </div>
          </div>
          <div>
          <div className='slide-item'
              style={{
                backgroundImage: `url('${image4}')`,
                backgroundSize: `cover`
              }}>
              <p className="slide-item__text">@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com</p> 
              </div>
          </div>
          <div>
          <div className='slide-item'
              style={{
                backgroundImage: `url('${image5}')`,
                backgroundSize: `cover`
              }}>
              <p className="slide-item__text">@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com</p> 
              </div>
          </div>
          <div>
          <div className='slide-item'
              style={{
                backgroundImage: `url('${image6}')`,
                backgroundSize: `cover`
              }}>
              <p className="slide-item__text">@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com</p> 
              </div>
          </div>
          <div>
          <div className='slide-item'
              style={{
                backgroundImage: `url('${image7}')`,
                backgroundSize: `cover`
              }}>
              <p className="slide-item__text">@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com</p> 
              </div>
          </div>
          <div>
            <div className='slide-item'
              style={{
                backgroundImage: `url('${image8}')`,
                backgroundSize: `cover`
              }}>
              <p className="slide-item__text">@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com</p> 
              </div>
          </div>
          <div>
            <div className='slide-item'
              style={{
                backgroundImage: `url('${image9}')`,
                backgroundSize: `cover`
              }}>
              <p className="slide-item__text">@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com</p> 
              </div>
          </div>
          <div>
            <div className='slide-item'
              style={{
                backgroundImage: `url('${image10}')`,
                backgroundSize: `cover`
              }}>
              <p className="slide-item__text">@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com</p> 
              </div>
          </div>
          <div>
            <div className='slide-item'
              style={{
                backgroundImage: `url('${image11}')`,
                backgroundSize: `cover`
              }}>
              <p className="slide-item__text">@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com</p> 
              </div>
          </div>
          <div>
            <div className='slide-item'
              style={{
                backgroundImage: `url('${image12}')`,
                backgroundSize: `cover`
              }}>
              <p className="slide-item__text">@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com</p> 
              </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export {Responsive}
