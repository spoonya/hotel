import { CLASSES } from "./constants.js";

export function controlVideos() {
	const playButtons = document.querySelectorAll("[data-video-play]");

	if (!playButtons.length) return;

	playButtons.forEach((button) =>
		button.addEventListener("click", function () {
			const videoContainer = this.closest("[data-video-container]");
			const videoCover = videoContainer.querySelector("[data-video-cover]");
			const video = videoContainer.querySelector("iframe");
			const src = video.dataset.src;

			video.setAttribute("src", src);

			videoCover.classList.remove(CLASSES.active);
		})
	);
}
