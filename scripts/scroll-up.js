const scrollUpBtn = document.querySelector(".to-top-btn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 200) {
    scrollUpBtn.classList.add("active");
  } else {
    scrollUpBtn.classList.remove("active");
  }
});
