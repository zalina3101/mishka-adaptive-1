
var navMenu   = document.querySelector(".main-nav__items");

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
