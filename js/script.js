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
  let dots = document.getElementsByClassName("dot");
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