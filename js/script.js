
var navMenu   = document.querySelector(".main-nav__items");
// var mqT = window.matchMedia( "(min-width: 768px)" ); // mq for tablet width
// var logoImg = document.querySelector(".page-header__logo img");

// Main nav Toggle

$(".js-nav-toggle").on("click", function() {
  $(this).toggleClass("main-nav__toggle--opened");
  if (!navMenu.classList.contains("main-nav--opened")) {
    navMenu.classList.add("main-nav--opened");
    if (navMenu.classList.contains("main-nav--closed")) {
      navMenu.classList.remove("main-nav--closed");
    }
  } else {
    navMenu.classList.remove("main-nav--opened");
    if (!navMenu.classList.contains("main-nav--closed")) {
      navMenu.classList.add("main-nav--closed");
    } else {
      navMenu.classList.remove("main-nav--closed");
    }
  }
});

//Change Logo at tablet width

// if (mqT.matches) {
//   logoImg.src = "../img/logo-tablet.svg"
// }
