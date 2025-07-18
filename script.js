function toggleMode() {
  const body = document.body;
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
  } else {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
  }
}

// Carousel logic untuk experience
let slideIndex = 0;
showSlides();

function moveSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  const slides = document.querySelectorAll("#experience .carousel-img");
  if (!slides.length) return;
  slideIndex = (n + slides.length) % slides.length;
  slides.forEach(slide => slide.classList.remove("active"));
  slides[slideIndex].classList.add("active");
}

// Carousel logic untuk project
function moveProjectSlide(button, n) {
  const carousel = button.parentElement;
  const images = carousel.querySelectorAll(".carousel-img");
  let index = [...images].findIndex(img => img.classList.contains("active"));
  images[index].classList.remove("active");
  index = (index + n + images.length) % images.length;
  images[index].classList.add("active");
}
