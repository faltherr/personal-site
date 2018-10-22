//This whole file should be refactored to enable a single function to take in the name of the app to display in slideshow. For now this will serve a basic production function.

//**** PALSS ****//

var slideIndex = 1;
showSlides_PALSS(slideIndex);

// Next/previous controls
function plusSlides_PALSS(n) {
  showSlides_PALSS(slideIndex += n);
}

// Thumbnail image controls
function currentSlide_PALSS(n) {
  showSlides_PALSS(slideIndex = n);
}

function showSlides_PALSS(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides_PALSS");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

//**** GMR ****//

showSlides_GMR(slideIndex);

// Next/previous controls
function plusSlides_GMR(n) {
  showSlides_GMR(slideIndex += n);
}

// Thumbnail image controls
function currentSlide_GMR(n) {
  showSlides_GMR(slideIndex = n);
}

function showSlides_GMR(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides_GMR");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

//**** AIDO ****//
//AIDO Carousel Function

showSlides_AIDO(slideIndex);

// Next/previous controls
function plusSlides_AIDO(n) {
  showSlides_AIDO(slideIndex += n);
}

// Thumbnail image controls
function currentSlide_AIDO(n) {
  showSlides_AIDO(slideIndex = n);
}

function showSlides_AIDO(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides_AIDO");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

//**** RED Alert ****//

showSlides_RED(slideIndex);

// Next/previous controls
function plusSlides_RED(n) {
  showSlides_RED(slideIndex += n);
}

// Thumbnail image controls
function currentSlide_RED(n) {
  showSlides_RED(slideIndex = n);
}

function showSlides_RED(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides_RED");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}