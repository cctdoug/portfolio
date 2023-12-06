// ----- Scrolls smoother when clicking the nav-links
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

// ----- Slideshow - Project
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

  // Check if slides is not empty
  if (slides.length === 0) {
    console.error("No elements with class 'images-group' found.");
    return;
  }

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

// ----- Change images of the slideshow auto
// It didn't work as I expected so I decided to drop it,
// I will leave it here to work on in and implement it

// var images = [];
// var texts = [];

// images[0] = 'equations-calc.jpg';
// images[1] = 'equations-calc00.jpg';
// images[2] = 'equations-calc01.jpg';

// texts[0] = 'Login Page';
// texts[1] = 'Calculator';
// texts[2] = 'History';

// var index = 0;

// function change() {
//   var slideshow = document.querySelector('.images-group');
//   slideshow.classList.add('fade-out');

//   setTimeout(function() {
//     document.getElementById("main-photo").src = images[index];
//     document.getElementById("main-text").textContent = texts[index];

//     slideshow.classList.remove('fade-out');
//   }, 500);

//   if (index == 2) {
//     index = 0;
//   } else {
//     index++;
//   }

//   setTimeout(change, 3000);
// }

// window.onload = change();

// ----- Clear placeholder
const input = document.getElementById("msg-box");

input.addEventListener("focus", function () {
  this.placeholder = "";
});

input.addEventListener("blur", function () {
  if (!this.value) {
    this.placeholder = "Enter your message here";
  }
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Assuming you're using FormSubmit service
    var formUrl = "https://formsubmit.co/2fa477eded23afe88ae0593a791d1898";
    var redirectUrl =
      "http://localhost:5500/portfolioProject/message_sent.html";

    // Serialize form data
    var formData = new FormData(event.target);

    // Send form data using Fetch API
    fetch(formUrl, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        // Check if the form submission was successful
        if (response.ok) {
          // Redirect to the specified URL
          window.location.href = redirectUrl;
        } else {
          // Handle errors if needed
          console.error("Form submission failed");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
