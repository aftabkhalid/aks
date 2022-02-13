var swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
  allowTouchMove: true,
  centerInsufficientSlides: true,
  simulateTouch: true,
  followFinger: true,
  //longSwipes: false,
  parallax: true,
  speed: 500,
  //loop: true,

  // pagination: {
  //   el: ".swiper-pagination",
  //   //type: "fraction",
  //   clickable: true,
  //   //dynamicBullets: true,
  //   //dynamicMainBullets: 1,
  // },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

// Loader
// function introLoader(element,delay) {
//   this.open = function(callback) {
//     setTimeout(function() {
//       $(element).fadeIn(500, function() {
//         if(callback !== undefined) callback();
//       });
//     }, delay);
//
//   };
//   this.close = function(callback) {
//     setTimeout(function() {
//       $(element).fadeOut(500, function() {
//         if(callback !== undefined) callback();
//       });
//     }, delay);
//   };
// }
// var LOADER = new introLoader('#introLoader',500);
// $(window).on('load', function() {
//   LOADER.close(function() {
//     alert('Page Loaded!')
//   });
// });
