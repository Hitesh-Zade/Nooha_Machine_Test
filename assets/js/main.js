const navToggle = document.querySelector("#nav-toggle");
const navbarVertical = document.querySelector(".navbar-vertical");
const pageContent = document.querySelector("#page-content");
navToggle.addEventListener("click", () => {
  navbarVertical.classList.toggle("navbar-hide");
  pageContent.classList.toggle("page-width");
});
