window.$ = window.jQuery = require('jquery');
require('bootstrap');
require('swiper/dist/css/swiper.min.css')

import Swiper from 'swiper';

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '.arrow--next',
    prevEl: '.arrow--prev'
  },
  on: {
    init: function () {
      console.log(this, 'swiper initialized. remove preinit styles.');
    }
  },
  breakpoints: {
    767: {
      slidesPerView: 1
    }
  }
});