const swiper = new Swiper('.destination-swiper', {
    // Optional parameters
    slidesPerView: "auto",
    spaceBetween: 20,

    navigation: {
      nextEl: '.next-element',
      prevEl: '.prev-element',
    },
  });

let specialSwiper = new Swiper('.special-swiper',{
  slidesPerView: 3,
  spaceBetween: 20,

  navigation: {
    nextEl: '.special-next-element',
    prevEl: '.special-prev-element',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1152: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    1440: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    1920: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  }
});




