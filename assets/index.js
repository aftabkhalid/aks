import Cursor from './cursor';
import {preloader} from './preloader';
import LocomotiveScroll from 'locomotive-scroll';
import Menu from './menu';

// menu (<nav> element)
const menuEl = document.querySelector('.menu');

// preload the images set as data attrs in the menu items
preloader('.menu__item').then(() => {
    // initialize the smooth scroll
    const scroll = new LocomotiveScroll({
      el: menuEl,
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      getDirection: true,
      mobile: {
        breakpoint: 0,
        smooth: false,
        getDirection: true,
      },
      tablet: {
        breakpoint: 0,
        smooth: false,
        getDirection: true,
      },
    });

    // initialize custom cursor
    const cursor = new Cursor(document.querySelector('.cursor'));

    // initialize menu
    new Menu(menuEl);
});
