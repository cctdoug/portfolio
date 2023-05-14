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

