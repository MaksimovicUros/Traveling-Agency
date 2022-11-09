// import { slider as _slider } from "./slider";

const mainMenu = document.getElementsByClassName("js-main-menu");
const secoundaryNavSearch = document.getElementById("js-sec-nav-search");
const menu = document.getElementsByClassName("js-menu");
const mainNav = document.getElementsByClassName("js-main-nav");
const searchDiv = document.getElementsByClassName("js-search-div");
const hamburgerMenu = document.getElementById("js-hamburger-menu");
const closeHamburgermenu = document.getElementById("js-close-hamburger-menu");
const tabletNav = document.getElementsByClassName("js-tablet-nav");
const playStorie = document.getElementById("js-play-storie");
const videoSection = document.getElementById("js-video-section");
const closeStorie = document.getElementById("js-close-storie");
const acc = document.getElementsByClassName("js-accordion-open");
const arrowDown = document.getElementsByClassName("js-icon-arrow-down");
const iconCheck = document.getElementsByClassName("js-icon-check");
const checkbox = document.getElementsByClassName("js-input-checkbox");
const bodyOverflow = document.getElementsByClassName("js-body-overflow");
const screenWidth = window.innerWidth;

// _slider();

// slider();

const swiper = new Swiper('.swiper', {

	loop: true,
	slidesPerView: 2.5,
	centeredSlides: false,
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
});

for (let i = 0; i < mainMenu.length; i++) {
  mainMenu[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("current-link");
  current[0].className = current[0].className.replace("current-link", "");
  this.className += " current-link";
  });
};

playStorie.addEventListener("click", function() {
  videoSection.classList.add("show-block");
});

closeStorie.addEventListener("click", function() {
  videoSection.classList.remove("show-block");
  videoSection.classList.add("hide");
})

secoundaryNavSearch.addEventListener("click", function() {
  secoundaryNavSearch.classList.add("hide");
  searchDiv[0].classList.remove("hide");
  if(screenWidth >= 1024) {
    menu[0].classList.remove("show-inline-table");
    menu[0].classList.add("hide");
  }
  else if(screenWidth > 426) {
    searchDiv[0].classList.remove("hide");
  }
  else {
    mainNav[0].classList.add("hide");
  }
});

document.getElementsByClassName("icon-close")[0].addEventListener("click", function() {
    secoundaryNavSearch.classList.remove("hide");
    searchDiv[0].classList.add("hide");
  if(screenWidth >= 1024) {
    menu[0].classList.remove("hide");
    menu[0].classList.add("show-inline-table");
  }
  else {
    mainNav[0].classList.remove("hide");
  }
});

hamburgerMenu.addEventListener("click", function() {
    closeHamburgermenu.classList.remove("hide");
    hamburgerMenu.classList.add("hide");
    tabletNav[0].classList.remove("hide");
    bodyOverflow[0].classList.add("set-overflow-hidden");
});

closeHamburgermenu.addEventListener("click", function() {
    hamburgerMenu.classList.remove("hide");
    tabletNav[0].classList.add("hide");
    closeHamburgermenu.classList.add("hide");
    bodyOverflow[0].classList.remove("body-overflow");
});

for(let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    let panel = this.nextElementSibling;

    if(panel.classList.contains("hide")) {
      panel.classList.remove("hide");
      arrowDown[i].classList.add("rotate-full");
    }else {
      panel.classList.add("hide");
      arrowDown[i].classList.remove("rotate-full");
    }
  });
}

checkbox[0].addEventListener("click", function() {
  if(iconCheck[0].classList.contains("hide")) {
    iconCheck[0].classList.remove("hide");
  }else {
    iconCheck[0].classList.add("hide");
  }
});