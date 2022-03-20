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

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

MM_preloadImages(
  'https://aftabkhalid.github.io/aks/images/web-design/auclaw/home.png',
  'https://aftabkhalid.github.io/aks/images/projects/taxslips/1.png',
  'https://aftabkhalid.github.io/aks/images/projects/taxslips/2.png',
  'https://aftabkhalid.github.io/aks/images/projects/taxslips/3.png',
  'https://aftabkhalid.github.io/aks/images/projects/taxslips/4.png',
  'https://aftabkhalid.github.io/aks/images/projects/taxslips/5.png',
  'https://aftabkhalid.github.io/aks/images/projects/taxslips/6.png',
  'https://aftabkhalid.github.io/aks/images/projects/taxslips/7.png',
  'https://aftabkhalid.github.io/aks/images/projects/taxslips/8.png',
  'https://aftabkhalid.github.io/aks/images/projects/taxslips/9.png',
  'https://aftabkhalid.github.io/aks/images/projects/taxslips/10.png',
  'https://aftabkhalid.github.io/aks/images/projects/taxslips/11.png',
  'https://aftabkhalid.github.io/aks/images/projects/taxslips/12.png',
  'https://aftabkhalid.github.io/aks/images/projects/taxslips/13.png',
  'https://aftabkhalid.github.io/aks/images/projects/taxslips/14.png',
  'https://aftabkhalid.github.io/aks/images/projects/taxslips/15.png',
  'https://aftabkhalid.github.io/aks/images/projects/taxslips/16.png',
  'https://aftabkhalid.github.io/aks/images/projects/taxslips/17.png',
  'https://aftabkhalid.github.io/aks/images/projects/taxslips/18.png',
); //add more if required

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
})()

//
// Particals for canvas

let c = init("canvas"),
  w = (canvas.width = window.innerWidth),
  h = (canvas.height = window.innerHeight);
//initiation

class firefly{
  constructor(){
    this.x = Math.random()*w;
    this.y = Math.random()*h;
    this.s = Math.random()*2;
    this.ang = Math.random()*2*Math.PI;
    this.v = this.s*this.s/4;
  }
  move(){
    this.x += this.v*Math.cos(this.ang);
    this.y += this.v*Math.sin(this.ang);
    this.ang += Math.random()*20*Math.PI/180-10*Math.PI/180;
  }
  show(){
    c.beginPath();
    c.arc(this.x,this.y,this.s,0,2*Math.PI);
    c.fillStyle="#fff";
    c.fill();
  }
}

let f = [];

function draw() {
  if(f.length < 100){
    for(let j = 0; j < 500; j++){
     f.push(new firefly());
    }
  }
  //animation
  for(let i = 0; i < f.length; i++){
    f[i].move();
    f[i].show();
    if(f[i].x < 0 || f[i].x > w || f[i].y < 0 || f[i].y > h){
      f.splice(i,4);
     }
  }
}

let mouse = {};
let last_mouse = {};

canvas.addEventListener(
  "mousemove",
  function(e) {
    last_mouse.x = mouse.x;
    last_mouse.y = mouse.y;

    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
  },
  false
);
function init(elemid) {
  let canvas = document.getElementById(elemid),
    c = canvas.getContext("2d"),
    w = (canvas.width = window.innerWidth),
    h = (canvas.height = window.innerHeight);
    c.fillStyle = "rgba(30,30,30,1)";
    c.fillRect(0, 0, w, h);
    return c;
}

window.requestAnimFrame = (function() {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback);
    }
  );
});

function loop() {
  window.requestAnimFrame(loop);
  c.clearRect(0, 0, w, h);
  draw();
}

window.addEventListener("resize", function() {
  (w = canvas.width = window.innerWidth),
  (h = canvas.height = window.innerHeight);
  loop();
});

loop();
setInterval(loop, 1000 / 60);
