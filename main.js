ScrollReveal().reveal(".reveal", { duration: 1000, reset: true });
ScrollReveal({ reset: false });

ScrollReveal().reveal(".left-to-right", {
  distance: "60px",
  origin: "left",
});

ScrollReveal().reveal(".right-to-left", {
  distance: "60px",
  origin: "right",
});

ScrollReveal().reveal(".delay-ltr", {
  distance: "60px",
  origin: "left",
  duration: 1000,
  delay: 500,
});

ScrollReveal().reveal(".mini-delay-ltr", {
  distance: "60px",
  origin: "left",
  duration: 1000,
  delay: 100,
});

ScrollReveal().reveal(".delay-rtl", {
  distance: "60px",
  origin: "right",
  duration: 1000,
  delay: 500,
});

ScrollReveal().reveal(".mini-delay-rtl", {
  distance: "60px",
  origin: "right",
  duration: 1000,
  delay: 100,
});

function mobileOpenMenu() {
  let header = document.getElementById("header");

  header.classList.toggle("menu");

  let bannerSection = document
    .getElementById("banner")
    .classList.toggle("hideSections");
  let cardsSection = document
    .getElementById("cards")
    .classList.toggle("hideSections");
  let footerBanner = document
    .getElementById("footer-banner")
    .classList.toggle("hideSections");
  let footer = document
    .getElementById("footer")
    .classList.toggle("hideSections");
  let xIcon = document.getElementById("x-icon");
  let burgerIcon = document.getElementById("burger-icon");

  xIcon.classList.toggle("x-icon-visibility");
  burgerIcon.classList.toggle("burger-icon-visibility");
}
