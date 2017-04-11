var mainNav   = document.querySelector(".main-nav"),
    navToggle = document.querySelector(".js-nav-toggle"),
    sliderList = document.querySelector(".reviews__list"),
    btnPrev   = document.querySelector(".reviews__slider-btn--prev"),
    btnNext   = document.querySelector(".reviews__slider-btn--next");
    shiftSlide = 0;

mainNav.classList.remove("main-nav--no-js");

navToggle.addEventListener("click", function() {
  mainNav.classList.toggle("main-nav--closed");
  mainNav.classList.toggle("main-nav--opened");
});

btnPrev.addEventListener("click", function(event) {
  event.preventDefault();

  if (shiftSlide === 0) {
    shiftSlide += -69;
  } else if (shiftSlide === -69) {
    shiftSlide += 34.5;
  } else {
    shiftSlide = 0;
  }

  sliderList.style.transform = "translateX(" + shiftSlide + "%)";
});

btnNext.addEventListener("click", function(event) {
  event.preventDefault();

  if (shiftSlide === 0) {
    shiftSlide += -34.5;
  } else if (shiftSlide === -34.5) {
    shiftSlide += -34.5;
  } else {
    shiftSlide = 0;
  }

  sliderList.style.transform = "translateX(" + shiftSlide + "%)";
});




