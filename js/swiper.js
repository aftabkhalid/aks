var swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  grabCursor: true,
  allowTouchMove: true,
  centerInsufficientSlides: true,
  longSwipes: false,
  //parallax: true,
  speed: 500,
  // pagination: {
  //   el: ".swiper-pagination",
  //   //type: "fraction",
  //   clickable: true,
  //   //dynamicBullets: true,
  //   //dynamicMainBullets: 1,
  // },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
