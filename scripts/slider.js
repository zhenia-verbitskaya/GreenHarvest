const swiper = new Swiper(".reviews-swiper", {
  slidesPerView: 1,
  spaceBetween: 18,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 18,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
  },
});
