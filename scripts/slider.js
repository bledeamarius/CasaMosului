let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
  // Center the full-size image
  // document.getElementById("fullImg").classList.add("centered-image");
  document.querySelector(".prev").style.display = "inline"
  document.querySelector(".next").style.display = "inline"
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}

function closeFullImg() {
    document.getElementById("fullImg").style.display = "none";
    // ... other code ...

    // Remove the centering class
    document.getElementById("fullImg").classList.remove("centered-image");
}


document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowRight') {
    // Trigger the next slide
    plusSlides(1);
  } else if (event.key === 'ArrowLeft') {
    // Trigger the previous slide
    plusSlides(-1);
  }
});