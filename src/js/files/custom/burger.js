import { CLASSES, DOM } from "./constants.js";

const header = document.querySelector("#header");
const burgerBtn = document.querySelector("#burger-button");
const page = document.querySelector("#page");

function toggleBurger() {
	burgerBtn.addEventListener("click", function () {
		DOM.body.classList.toggle(CLASSES.scrollHidden);
		header.classList.toggle(CLASSES.open);
		this.classList.toggle(CLASSES.active);
		page.classList.toggle(CLASSES.pageDark);
	});

	window.addEventListener("click", (e) => {
		const path = e.path || (e.composedPath && e.composedPath());

		if (path.includes(header)) return;

		if (header.classList.contains(CLASSES.open)) {
			DOM.body.classList.remove(CLASSES.scrollHidden);
			header.classList.remove(CLASSES.open);
			burgerBtn.classList.remove(CLASSES.active);
			page.classList.remove(CLASSES.pageDark);
		}
	});
}

export function controlHeaderBurger() {
	toggleBurger();
}
