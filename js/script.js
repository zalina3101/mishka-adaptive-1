
var navMenu   = document.querySelector(".main-nav__items");
var mainNavOpened = 0;
var mainNavClosed = 0;
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

// media query event handler
if (matchMedia) {
  var mq = window.matchMedia("(min-width: 768px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

// media query change
function WidthChange(mq) {
  if (navMenu.classList.contains("main-nav--closed")) {
    mainNavClosed = 1;
  } else if (navMenu.classList.contains("main-nav--opened")) {
    mainNavOpened = 1;
  }
  if (mq.matches) {
     console.log("IN1", mainNavOpened, mainNavClosed);
    if (mainNavOpened) {
      navMenu.classList.remove("main-nav--opened");
    } else if (mainNavClosed) {
      navMenu.classList.remove("main-nav--closed");
    }

  } else {
    console.log("IN2", mainNavOpened, mainNavClosed);
    if (mainNavOpened) {
      navMenu.classList.add("main-nav--opened");
    } else if (mainNavClosed) {
      navMenu.classList.add("main-nav--closed");
    }

  }

}

// if (mqT.matches) {
//   logoImg.src = "../img/logo-tablet.svg"
// }
