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
  showSlides((slideIndex += n));
}

function currentImage(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("images-group");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// Change images of the slideswho overtime
var images = [];
var texts = [];

images[0] = 'img/equations-calc.jpg';
images[1] = 'img/equations-calc00.jpg';
images[2] = 'img/equations-calc01.jpg';

texts[0] = 'Login Page';
texts[1] = 'Calculator';
texts[2] = 'History';

var index = 0;

function change() {
  var slideshow = document.querySelector('.images-group');
  slideshow.classList.add('fade-out');

  setTimeout(function() {
    document.getElementById("main-photo").src = images[index];
    document.getElementById("main-text").textContent = texts[index];

    slideshow.classList.remove('fade-out');
  }, 500); // Adjust the delay to match the CSS transition duration

  if (index == 2) {
    index = 0;
  } else {
    index++;
  }

  setTimeout(change, 3000);
}

window.onload = change();
// Clear placeholder
const input = document.getElementById("msg-box");

input.addEventListener("focus", function () {
  this.placeholder = "";
});

input.addEventListener("blur", function () {
  if (!this.value) {
    this.placeholder = "Enter your message here";
  }
});
