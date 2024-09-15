/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
   // Список слайдерів
   // Перевіряємо, чи є слайдер на сторінці
   if (document.querySelectorAll(".swiper")) {
      // Вказуємо склас потрібного слайдера
      // Створюємо слайдер
      new Swiper(".welcome__slider", {
         // Вказуємо склас потрібного слайдера
         // Підключаємо модулі слайдера
         // для конкретного випадку
         modules: [Navigation, Pagination],
         observer: true,
         observeParents: true,
         slidesPerView: 1,
         spaceBetween: 0,
         //autoHeight: true,
         speed: 800,

         //touchRatio: 0,
         //simulateTouch: false,
         //loop: true,
         //preloadImages: false,
         //lazy: true,

         /*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

         // Пагінація

         pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
               // Форматирование номера слайда: добавляем ведущий ноль только для чисел от 1 до 9
               let slideNumber =
                  index + 1 <= 9 ? `0${index + 1}` : `${index + 1}`;
               return `<span class="${className}">${slideNumber}</span>`;
            },
         },

         // Скроллбар
         /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

         // Кнопки "вліво/вправо"
         navigation: {
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
         },
         /*
			// Брейкпоінти
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
         // Події
         on: {
            init: function () {
               // Обновляем пагинацию при инициализации
               let bullets = document.querySelectorAll(
                  ".swiper-pagination .swiper-pagination-bullet"
               );
               bullets.forEach((bullet, index) => {
                  if (index === this.realIndex) {
                     bullet.innerHTML =
                        index + 1 <= 9 ? `0${index + 1}` : `${index + 1}`;
                  } else {
                     bullet.innerHTML = "•";
                  }
               });
            },
            slideChange: function () {
               // Обновляем пагинацию после смены слайда
               let bullets = document.querySelectorAll(
                  ".swiper-pagination .swiper-pagination-bullet"
               );
               bullets.forEach((bullet, index) => {
                  if (index === this.realIndex) {
                     bullet.innerHTML =
                        index + 1 <= 9 ? `0${index + 1}` : `${index + 1}`;
                  } else {
                     bullet.innerHTML = "•";
                  }
               });
            },
         },
      });
      new Swiper(".tesmontials__slider", {
         // Вказуємо склас потрібного слайдера
         // Підключаємо модулі слайдера
         // для конкретного випадку
         modules: [Navigation, Pagination],
         observer: true,
         observeParents: true,
         slidesPerView: 4,
         spaceBetween: 20,
         speed: 800,

         //touchRatio: 0,
         //simulateTouch: false,
         // loop: true,
         //preloadImages: false,
         lazy: true,

         /*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

         // Пагінація

         pagination: {
            el: ".tesmontials-pagination",
            clickable: true,
            renderBullet: function (index, className) {
               // Форматирование номера слайда: добавляем ведущий ноль только для чисел от 1 до 9
               let slideNumber =
                  index + 1 <= 9 ? `0${index + 1}` : `${index + 1}`;
               return `<span class="${className}">${slideNumber}</span>`;
            },
         },

         // Скроллбар

         // scrollbar: {
         //    el: ".swiper-scrollbar",
         //    draggable: true,
         // },

         // Кнопки "вліво/вправо"
         navigation: {
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
         },

         // Брейкпоінти
         breakpoints: {
            // 640: {
            // 	slidesPerView: 1,
            // 	spaceBetween: 0,
            // 	autoHeight: true,
            // },
            320: {
               slidesPerView: 1,
               // direction: "vertical",
               spaceBetween: 20,
               // height: 600,
            },
            767: {
               slidesPerView: 2,
               // direction: "vertical",
               spaceBetween: 20,
               // height: 600,
               // grid: {
               //    rows: 2,
               // },
            },
            1199: {
               slidesPerView: 3,
            },
            1500: {
               slidesPerView: 4,
            },
         },

         // Події
         on: {
            slideChange: function () {
               // Обновляем пагинацию после смены слайда
               let bullets = document.querySelectorAll(
                  ".tesmontials-pagination .swiper-pagination-bullet"
               );
               bullets.forEach((bullet, index) => {
                  if (index === this.realIndex) {
                     bullet.innerHTML =
                        index + 1 <= 9 ? `0${index + 1}` : `${index + 1}`;
                  } else {
                     bullet.innerHTML = "•";
                  }
               });
               this.updateSlidesClasses();
            },
            init: function () {
               // Обновляем пагинацию при инициализации
               let bullets = document.querySelectorAll(
                  ".tesmontials-pagination .swiper-pagination-bullet"
               );
               bullets.forEach((bullet, index) => {
                  if (index === this.realIndex) {
                     bullet.innerHTML =
                        index + 1 <= 9 ? `0${index + 1}` : `${index + 1}`;
                  } else {
                     bullet.innerHTML = "•";
                  }
               });
               this.updateSlidesClasses();
            },
         },
      });
      new Swiper(".similar__slider", {
         // Вказуємо склас потрібного слайдера
         // Підключаємо модулі слайдера
         // для конкретного випадку
         modules: [Navigation, Pagination],
         observer: true,
         observeParents: true,
         slidesPerView: 3,
         spaceBetween: 20,
         speed: 800,

         //touchRatio: 0,
         //simulateTouch: false,
         // loop: true,
         //preloadImages: false,
         lazy: true,

         /*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

         // Пагінація

         pagination: {
            el: ".tesmontials-pagination",
            clickable: true,
            renderBullet: function (index, className) {
               // Форматирование номера слайда: добавляем ведущий ноль только для чисел от 1 до 9
               let slideNumber =
                  index + 1 <= 9 ? `0${index + 1}` : `${index + 1}`;
               return `<span class="${className}">${slideNumber}</span>`;
            },
         },

         // Скроллбар

         // scrollbar: {
         //    el: ".swiper-scrollbar",
         //    draggable: true,
         // },

         // Кнопки "вліво/вправо"
         navigation: {
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
         },

         // Брейкпоінти
         breakpoints: {
            // 640: {
            // 	slidesPerView: 1,
            // 	spaceBetween: 0,
            // 	autoHeight: true,
            // },
            320: {
               slidesPerView: 1.3,
               spaceBetween: 20,
            },
            480: {
               slidesPerView: 1.5,
               spaceBetween: 20,
            },
            767: {
               slidesPerView: 2,
               spaceBetween: 20,
            },
            // 1199: {
            //    slidesPerView: 3,
            // },
            1500: {
               slidesPerView: 3,
            },
         },

         // Події
         on: {
            slideChange: function () {
               // Обновляем пагинацию после смены слайда
               let bullets = document.querySelectorAll(
                  ".tesmontials-pagination .swiper-pagination-bullet"
               );
               bullets.forEach((bullet, index) => {
                  if (index === this.realIndex) {
                     bullet.innerHTML =
                        index + 1 <= 9 ? `0${index + 1}` : `${index + 1}`;
                  } else {
                     bullet.innerHTML = "•";
                  }
               });
               this.updateSlidesClasses();
            },
            init: function () {
               // Обновляем пагинацию при инициализации
               let bullets = document.querySelectorAll(
                  ".tesmontials-pagination .swiper-pagination-bullet"
               );
               bullets.forEach((bullet, index) => {
                  if (index === this.realIndex) {
                     bullet.innerHTML =
                        index + 1 <= 9 ? `0${index + 1}` : `${index + 1}`;
                  } else {
                     bullet.innerHTML = "•";
                  }
               });
               this.updateSlidesClasses();
            },
         },
      });
   }
}

// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
   let sliderScrollItems = document.querySelectorAll(".swiper_scroll");
   if (sliderScrollItems.length > 0) {
      for (let index = 0; index < sliderScrollItems.length; index++) {
         const sliderScrollItem = sliderScrollItems[index];
         const sliderScrollBar =
            sliderScrollItem.querySelector(".swiper-scrollbar");
         const sliderScroll = new Swiper(sliderScrollItem, {
            observer: true,
            observeParents: true,
            direction: "vertical",
            slidesPerView: "auto",
            freeMode: {
               enabled: true,
            },
            scrollbar: {
               el: sliderScrollBar,
               draggable: true,
               snapOnRelease: false,
            },
            mousewheel: {
               releaseOnEdges: true,
            },
         });
         sliderScroll.scrollbar.updateSize();
      }
   }
}

window.addEventListener("load", function (e) {
   // Запуск ініціалізації слайдерів
   initSliders();
   // Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
   //initSlidersScroll();
});
