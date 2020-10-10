// ===== SHOW HIDDEN MENU NAVBAR =====
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// ===== RELLAX JS =====
var rellax = new Rellax(".parallax");

// ===== ANIMATION GSAP =====
// -- logo --
gsap.from(".nav__logo", {
  opacity: 0,
  duration: 1,
  delay: 0.5,
  y: 30,
  ease: "expo.ease",
});

// -- toggle --
gsap.from(".nav__toggle", {
  opacity: 0,
  duration: 1,
  delay: 0.7,
  y: -30,
  ease: "expo.ease",
});

// -- navbar --
gsap.from(".nav__item", {
  opacity: 0,
  duration: 1,
  delay: 0.5,
  y: -30,
  stagger: 0.2,
});

// -- text --
gsap.from(".home__title", {
  opacity: 0,
  duration: 1,
  delay: 1.3,
  y: 30,
  ease: "expo.ease",
});

gsap.from(".home__subtitle", {
  opacity: 0,
  duration: 1,
  delay: 1.5,
  y: -30,
  ease: "expo.ease",
});

// -- scroll --
gsap.from(".home__scroll", {
  opacity: 0,
  duration: 1,
  delay: 1.8,
  y: 30,
  ease: "expo.ease",
});

// ===== SCROLL REVEAL ====
const sr = ScrollReveal({
  duration: 2500,
  reset: true,
});

// -- explore data --
sr.reveal(".explore__data", {
  origin: "left",
  distance: "80px",
});

// -- explore img
sr.reveal(".explore__img", {
  origin: "left",
  distance: "100px",
  delay: 200,
});
