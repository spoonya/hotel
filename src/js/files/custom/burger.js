import { CLASSES, DOM } from "./constants.js";

const burgerBtn = document.querySelector("#burger-button");

function toggleBurger() {
	burgerBtn.addEventListener("click", function () {
		DOM.body.classList.toggle(CLASSES.scrollHidden);
		DOM.header.classList.toggle(CLASSES.open);
		this.classList.toggle(CLASSES.active);
		DOM.page.classList.toggle(CLASSES.pageDark);
	});

	window.addEventListener("click", (e) => {
		const path = e.composedPath && e.composedPath();

		if (path.includes(DOM.header)) return;

		if (DOM.header.classList.contains(CLASSES.open)) {
			DOM.body.classList.remove(CLASSES.scrollHidden);
			DOM.header.classList.remove(CLASSES.open);
			burgerBtn.classList.remove(CLASSES.active);
			DOM.page.classList.remove(CLASSES.pageDark);
		}
	});
}

export function controlHeaderBurger() {
	toggleBurger();
}
