/* ocultar navbar */
const navbar = document.querySelector(".navbar");
const navbarToggle = document.querySelector(".navbar-toggle");

navbarToggle.addEventListener("click", () => {
  navbar.classList.toggle("navbar-collapsed");
});
