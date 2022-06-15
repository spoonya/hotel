/*
Документация по работе в шаблоне:
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import "swiper/css";

// Инициализация слайдеров
function initSliders() {
	if (document.querySelector("#swiper-offer")) {
		// Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper("#swiper-offer", {
			// Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Pagination, Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 30,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: false,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			pagination: {
				el: ".slider-pagination",
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: ".slider-button-prev",
				nextEl: ".slider-button-next",
			},

			// Брейкпоинты
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 2,
					spaceBetween: 15,
				},
				992: {
					slidesPerView: 3,
				},
			},
			// События
			on: {},
		});
	}

	if (document.querySelector("#swiper-rooms")) {
		new Swiper("#swiper-rooms", {
			modules: [Pagination, Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 20,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: false,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			pagination: {
				el: ".slider-pagination",
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: ".slider-button-prev",
				nextEl: ".slider-button-next",
			},

			// События
			on: {},
		});
	}

	if (document.querySelector("#swiper-info-rooms")) {
		new Swiper("#swiper-info-rooms", {
			modules: [Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			pagination: {
				el: ".slider-pagination",
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// События
			on: {},
		});
	}

	if (document.querySelector("#swiper-info-parking")) {
		new Swiper("#swiper-info-parking", {
			modules: [Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			pagination: {
				el: ".slider-pagination",
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// События
			on: {},
		});
	}

	if (document.querySelector("#swiper-info-sauna")) {
		new Swiper("#swiper-info-sauna", {
			modules: [Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			pagination: {
				el: ".slider-pagination",
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// События
			on: {},
		});
	}

	if (document.querySelector("#swiper-info-restaurant")) {
		new Swiper("#swiper-info-restaurant", {
			modules: [Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			pagination: {
				el: ".slider-pagination",
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// События
			on: {},
		});
	}

	if (document.querySelector("#swiper-info-banket")) {
		new Swiper("#swiper-info-banket", {
			modules: [Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			pagination: {
				el: ".slider-pagination",
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// События
			on: {},
		});
	}

	if (document.querySelector("#swiper-info-terrasa")) {
		new Swiper("#swiper-info-terrasa", {
			modules: [Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			pagination: {
				el: ".slider-pagination",
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: ".slider-button-prev",
				nextEl: ".slider-button-next",
			},

			// События
			on: {},
		});
	}

	if (document.querySelector("#swiper-info-club")) {
		new Swiper("#swiper-info-club", {
			modules: [Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			pagination: {
				el: ".slider-pagination",
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// События
			on: {},
		});
	}

	if (document.querySelector("#swiper-info-bar")) {
		new Swiper("#swiper-info-bar", {
			modules: [Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			pagination: {
				el: ".slider-pagination",
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// События
			on: {},
		});
	}

	if (document.querySelector("#swiper-info-corp")) {
		new Swiper("#swiper-info-corp", {
			modules: [Pagination, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			// Эффекты
			// effect: "fade",
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},

			pagination: {
				el: ".slider-pagination",
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// События
			on: {},
		});
	}

	if (document.querySelector("#swiper-info-boat")) {
		new Swiper("#swiper-info-boat", {
			modules: [Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			pagination: {
				el: ".slider-pagination",
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// События
			on: {},
		});
	}

	if (document.querySelector("#swiper-info-service")) {
		new Swiper("#swiper-info-service", {
			modules: [Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			pagination: {
				el: ".slider-pagination",
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// События
			on: {},
		});
	}

	if (document.querySelector("#swiper-room")) {
		new Swiper("#swiper-room", {
			modules: [Pagination, Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			pagination: {
				el: ".slider-pagination",
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: ".info__button-prev",
				nextEl: ".info__button-next",
			},

			// События
			on: {},
		});
	}

	if (document.querySelector("#swiper-info-rooms-eco")) {
		new Swiper("#swiper-info-rooms-eco", {
			modules: [Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			allowTouchMove: false,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			pagination: {
				el: ".slider-pagination",
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// События
			on: {},
		});
	}

	if (document.querySelector("#swiper-info-rooms-improved")) {
		new Swiper("#swiper-info-rooms-improved", {
			modules: [Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			allowTouchMove: false,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			pagination: {
				el: ".slider-pagination",
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// События
			on: {},
		});
	}

	if (document.querySelector("#swiper-info-rooms-lux")) {
		new Swiper("#swiper-info-rooms-lux", {
			modules: [Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			allowTouchMove: false,
			//preloadImages: false,
			//lazy: true,

			// Эффекты
			// autoplay: {
			// 	delay: 3000,
			// 	disableOnInteraction: false,
			// },

			pagination: {
				el: ".slider-pagination",
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// События
			on: {},
		});
	}

	if (document.querySelector("#swiper-info-rooms-president")) {
		new Swiper("#swiper-info-rooms-president", {
			modules: [Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			allowTouchMove: false,
			//preloadImages: false,
			//lazy: true,

			// Эффекты
			// autoplay: {
			// 	delay: 3000,
			// 	disableOnInteraction: false,
			// },

			pagination: {
				el: ".slider-pagination",
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// События
			on: {},
		});
	}

	if (document.querySelector("#swiper-contacts-1")) {
		new Swiper("#swiper-contacts-1", {
			modules: [Pagination, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			// Эффекты
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},

			pagination: {
				el: ".slider-pagination",
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// События
			on: {},
		});
	}

	if (document.querySelector("#swiper-contacts-2")) {
		new Swiper("#swiper-contacts-2", {
			modules: [Pagination, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,

			// Эффекты
			autoplay: {
				delay: 4000,
				disableOnInteraction: false,
			},

			pagination: {
				el: ".slider-pagination",
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// События
			on: {},
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
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
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});
