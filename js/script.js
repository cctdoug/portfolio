// Scrolls smoother when clicking the nav-links
function scrollToSection(event) {
  event.preventDefault();

  const target = document.querySelector(this.getAttribute("href"));
  const offsetTop = target.offsetTop;
  window.scrollTo({
    top: offsetTop,
    behavior: "smooth",
  });
}

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});


// Slideshow - Project
let slideIndex = 1;
showSlides(slideIndex);

function plusImages(n) {
  showSlides(slideIndex += n);
}

function currentImage(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("images-group");
   if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// Clear placeholder
const input = document.getElementById('msg-box');

input.addEventListener('focus', function() {
  this.placeholder = '';
});

input.addEventListener('blur', function() {
  if (!this.value) {
    this.placeholder = 'Enter your message here';
  }
});
