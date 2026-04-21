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

//AI did most of the JS as I am still learning it as I go