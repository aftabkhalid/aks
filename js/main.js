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

};

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
  });
});

//