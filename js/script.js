var mainNav = document.querySelector(".main-nav");
var navToggle = document.querySelector(".js-nav-toggle");

mainNav.classList.remove("main-nav--no-js");

navToggle.addEventListener("click", function() {
  mainNav.classList.toggle("main-nav--closed");
  mainNav.classList.toggle("main-nav--opened");
});

console.log("hello");


