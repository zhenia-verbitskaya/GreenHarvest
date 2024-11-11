const menuOpenBtn = document.querySelector(".mobile-menu-open-btn");
const menuCloseBtn = document.querySelector(".mobile-menu-close-btn");
const mobileMenu = document.querySelector(".mobile-menu-container");
const body = document.querySelector(".body");

menuOpenBtn.addEventListener("click", function () {
  body.classList.add("unscrolled");
  mobileMenu.classList.add("is-open");
});

mobileMenu.addEventListener("click", () => {
  body.classList.remove("unscrolled");
  mobileMenu.classList.remove("is-open");
});
