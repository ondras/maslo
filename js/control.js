import * as slides from "slides.js";
import * as mouse from "mouse.js";
import * as mode from "mode.js";


function onKeyDown(e) {
	switch (e.code) {
		case "Home": slides.show(0); break;
		case "End": slides.show(slides.nodes.length-1); break;

		case "ArrowLeft":
		case "ArrowUp":
		case "PageUp":
		case "Backspace":
			slides.show(slides.currentIndex-1);
		break;

		case "ArrowRight":
		case "ArrowDown":
		case "PageDown":
		case "Space":
			slides.show(slides.currentIndex+1);
		break;

		case "CapsLock": mouse.toggle(); break;

		case "Escape": mode.toggle(); break;
	}
}

function swipeBy(diff, e) {
	if (e.pointerType == "mouse" || mouse.active) { return; }
	slides.show(slides.currentIndex+diff)
}
function onSwipeLeft(e) { swipeBy(+1, e); }
function onSwipeRight(e) { swipeBy(-1, e); }

export function init() {
	window.addEventListener("keydown", onKeyDown);
	let hammer = new Hammer(window);
	hammer.on("swipeleft", onSwipeLeft);
	hammer.on("swiperight", onSwipeRight);
}
