const swiper = new Swiper('.destination-swiper', {
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

let tripPlannerSwiper = new Swiper('.trip-planner-swiper',{
  slidesPerView : 3,
  spaceBetween : 30,

});

let gallerySwiper = new Swiper('.gallery-swiper', {
  spaceBetween : 20,
  

  breakpoints : {
    320 : {
      slidesPerView : 1,
    },

    768 : {
      slidesPerView : "auto",
    },

    1152 : {
      slidesPerView : "auto",
    },

    1440: {
      slidesPerView : "auto",
    },
  },

  navigation : {
    nextEl : '.gallery-next',
    prevEl : '.gallery-prev',
  },
});

var swiperOptions = {
  navigation: {
    nextEl: ".test-next",
    prevEl: ".test-prev",
  },

  spaceBetween : 20,
  loop : true,

  breakpoints : {
    320 : {
      slidesPerView : 1,
    },

    768: {
      slidesPerView : 1,
    },

    1152: {
      slidesPerView : 2.5,
    },

    1440 : {
      slidesPerView: 2.5,
    },

    1920 : {
      slidesPerView : 3,
    },
  },
};

var testimonialSwiper = new Swiper('.testimonial-swiper', swiperOptions);

var hamburger = document.querySelector(".hamburger");
var menu = document.querySelector(".menu-links");

hamburger.addEventListener("click", () =>{
  menu.classList.toggle("active");
});






