// Swiper slider
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
  breakpoints: {
    576: {
      slidesPerView: 1.25,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 1.53,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 2.325,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});



// Page loader
document.body.onload = function() {

  // Preloader overlay
  setTimeout(function() {
    var preloader = document.getElementById('preloader');
    if( !preloader.classList.contains('done') ) {
      preloader.classList.add('done');
    }
  },1000);

  $(preloader).on('scroll touchmove mousewheel keydown keypress keyup',function(e){
    e.preventDefault();
    e.stopPropagation();
    return false;
  });

  // Random header backgrounds
  var header = document.getElementById('header');
  var backgrounds = new Array(
    '../images/header-bg-1.jpg',
    '../images/header-bg-2.jpg',
    '../images/header-bg-3.jpg',
    '../images/header-bg-4.jpg',
    '../images/header-bg-5.jpg',
    '../images/header-bg-6.jpg',
    '../images/header-bg-7.jpg',
    '../images/header-bg-8.jpg'
  );
  var numBg = backgrounds.length;
  if (document.images) {
      var chosenBg = Math.floor((Math.random() * numBg));
      header.style.background = 'url(' + backgrounds[chosenBg] + ')';
  };

};

//
// Full screen menu

$(function() {

  /* LOCAL STORAGE START */
  // To reset your local storage
  localStorage.removeItem('learnMenu');

  //check if menu-pulses are required
  function checkMenuPulseState() {
    if(localStorage.getItem('learnMenu') == 'learned') {
      var $menuPulse = $('.menu-pulse');
      $menuPulse.addClass('is-learned');
    }
  }
  checkMenuPulseState();
  /* LOCAL STORAGE END */

  $(".menu-link").click(function(e) {
    e.preventDefault();

    /* LOCAL STORAGE START */
    localStorage.setItem('learnMenu', 'learned');
    checkMenuPulseState();
    /* LOCAL STORAGE END */
    $(".menu-overlay").toggleClass("menu-open");
    $(".menu-toggle").toggleClass("menu-open");
    $(".header-portfolio").toggleClass("expanded");

    $(".menu-open").on('scroll touchmove mousewheel keydown keypress keyup',function(e){
      e.preventDefault();
      e.stopPropagation();
      return false;
    });


  });
});

//
// Preload images
//
// function MM_preloadImages() { //v3.0
//   var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
//     var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
//     if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
// }
//
// MM_preloadImages(
//   'https://aftabkhalid.github.io/aks/images/web-design/auclaw/home.png',
//   'https://aftabkhalid.github.io/aks/images/projects/taxslips/1.png',
//   'https://aftabkhalid.github.io/aks/images/projects/taxslips/2.png',
//   'https://aftabkhalid.github.io/aks/images/projects/taxslips/3.png',
//   'https://aftabkhalid.github.io/aks/images/projects/taxslips/4.png',
//   'https://aftabkhalid.github.io/aks/images/projects/taxslips/5.png',
//   'https://aftabkhalid.github.io/aks/images/projects/taxslips/6.png',
//   'https://aftabkhalid.github.io/aks/images/projects/taxslips/7.png',
//   'https://aftabkhalid.github.io/aks/images/projects/taxslips/8.png',
//   'https://aftabkhalid.github.io/aks/images/projects/taxslips/9.png',
//   'https://aftabkhalid.github.io/aks/images/projects/taxslips/10.png',
//   'https://aftabkhalid.github.io/aks/images/projects/taxslips/11.png',
//   'https://aftabkhalid.github.io/aks/images/projects/taxslips/12.png',
//   'https://aftabkhalid.github.io/aks/images/projects/taxslips/13.png',
//   'https://aftabkhalid.github.io/aks/images/projects/taxslips/14.png',
//   'https://aftabkhalid.github.io/aks/images/projects/taxslips/15.png',
//   'https://aftabkhalid.github.io/aks/images/projects/taxslips/16.png',
//   'https://aftabkhalid.github.io/aks/images/projects/taxslips/17.png',
//   'https://aftabkhalid.github.io/aks/images/projects/taxslips/18.png',
// ); //add more if required

//
// Audit form

(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var myForms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(myForms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})();
