console.log("Hello world from swiper-init.js");
var storySlider = new Swiper(".story-slider", {
  slidesPerView: 12.5,
  spaceBetween: 1,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 4,
      spaceBetween: 1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 4.5,
      spaceBetween: 1,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 12.5,
      spaceBetween: 1,
    },
  }, // end breakpoints

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var mainSlider = new Swiper(".main-slider", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var amazingSlider = new Swiper(".amazing-slider", {
  slidesPerView: 7.3,
  spaceBetween: 3,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2.7,
      spaceBetween: 5,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3.8,
      spaceBetween: 1,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 7.3,
      spaceBetween: 1,
    },
  }, // end breakpoints
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".swiperShopping", {
  slidesPerView: 6.5,
  grid: {
    rows: 2, // override the value of rows
  },
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 3.5,
      spaceBetween: 2,
      grid: {
        rows: 3,
      },
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3.5,
      spaceBetween: 1,
      grid: {
        rows: 3,
      },
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 6.5,
      spaceBetween: 1,
      grid: {
        rows: 2,
      },
    },
  },
});
var swiper = new Swiper(".favorite-brand-Swiper", {
  slidesPerView: 9.5,
  spaceBetween: 20,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 4.2,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 6.2,
      spaceBetween: 10,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 9.5,
      spaceBetween: 20,
    },
  }, // end breakpoints

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".mySwiper-artGrid", {
  slidesPerView: 4,
  spaceBetween: 3,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.6,
      spaceBetween: 2,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2.6,
      spaceBetween: 2,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 6,
      spaceBetween: 2,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".swiperSelection", {
  slidesPerView: 2,
  spaceBetween: 2,
  grid: {
    rows: 9,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 2,
      grid: {
        rows: 9,
      },
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 2,
      grid: {
        rows: 9,
      },
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 6,
      spaceBetween: 2,
      grid: {
        rows: 3,
      },
    },
  },
});
var swiper = new Swiper(".ending-amazing-swiper", {
  slidesPerView: 7,
  spaceBetween: 1,
// Responsive breakpoints
breakpoints: {
  // when window width is >= 320px
  320: {
    slidesPerView: 3.5,
    spaceBetween: 1,
  },
  // when window width is >= 480px
  480: {
    slidesPerView: 5.2,
    spaceBetween: 1,
  },
  // when window width is >= 640px
  640: {
    slidesPerView: 7,
    spaceBetween: 2,
  },
}, // end breakpoints
});
var swiper = new Swiper(".special-amazing-swiper", {
  slidesPerView: 7,
  spaceBetween: 1,
// Responsive breakpoints
breakpoints: {
  // when window width is >= 320px
  320: {
    slidesPerView: 3.5,
    spaceBetween: 1,
  },
  // when window width is >= 480px
  480: {
    slidesPerView: 5.2,
    spaceBetween: 1,
  },
  // when window width is >= 640px
  640: {
    slidesPerView: 7,
    spaceBetween: 2,
  },
}, // end breakpoints
});


var swiper = new Swiper(".swiper-mobile-menu", {
  slidesPerView: 4.8,
  spaceBetween: 2,

});