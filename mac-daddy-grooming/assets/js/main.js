document.documentElement.classList.add("js-enabled");

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-link");

function closeMenu() {
  nav.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
}

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("click", (event) => {
  if (!nav.classList.contains("is-open")) return;
  if (nav.contains(event.target)) return;
  closeMenu();
});

/* ===== BOOKING FORM VALIDATION ===== */
const bookingForm = document.querySelector(".booking-form");

if (bookingForm) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    bookingForm.classList.add("was-validated");

    if (bookingForm.checkValidity()) {
      const ownerName = document.getElementById("ownerName").value;
      const petName = document.getElementById("petName").value;

      alert(
        `Thanks, ${ownerName}! Your appointment for ${petName} has been booked. ` +
          `We'll send you a text to confirm your spot, cool cat!`,
      );

      bookingForm.reset();
      bookingForm.classList.remove("was-validated");
    } else {
      const firstInvalid = bookingForm.querySelector(":invalid");
      if (firstInvalid) {
        firstInvalid.focus();
        firstInvalid.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  });
}

/* ===== CAROUSEL ===== */
const carousel = document.querySelector(".carousel");

if (carousel) {
  const track = carousel.querySelector(".carousel-track");
  const slides = carousel.querySelectorAll(".carousel-item");
  const prevBtn = carousel.querySelector(".carousel-prev");
  const nextBtn = carousel.querySelector(".carousel-next");
  const dots = carousel.querySelectorAll(".carousel-indicators button");

  let currentIndex = 0;
  const totalSlides = slides.length;
  const autoRotateDelay = 5000;
  let autoRotateTimer;

  function goToSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;

    track.style.transform = `translateX(-${index * 100}%)`;

    slides.forEach((slide, i) => {
      slide.classList.toggle("is-active", i === index);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("is-active", i === index);
      dot.setAttribute("aria-selected", i === index ? "true" : "false");
    });

    currentIndex = index;
  }

  function nextSlide() { goToSlide(currentIndex + 1); }
  function prevSlide() { goToSlide(currentIndex - 1); }


  nextBtn.addEventListener("click", () => {
    nextSlide();
  });

  prevBtn.addEventListener("click", () => {
    prevSlide();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      goToSlide(i);
    });
  });

}

