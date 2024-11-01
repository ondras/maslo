import * as mouse from "./mouse.js";
import * as mode from "./mode.js";
import Hammer from "hammerjs";


function onKeyDown(e, deck) {
	switch (e.code) {
		case "Home": deck.show(0); break;
		case "End": deck.show(deck.slides.length-1); break;

		case "ArrowLeft":
		case "ArrowUp":
		case "PageUp":
		case "Backspace":
			deck.show(deck.currentIndex-1);
		break;

		case "ArrowRight":
		case "ArrowDown":
		case "PageDown":
		case "Space":
			deck.show(deck.currentIndex+1);
		break;

		case "CapsLock": mouse.toggle(); break;

		case "Escape": mode.toggle(); break;
	}
}

function swipeBy(diff, e, deck) {
	if (e.pointerType == "mouse" || mouse.active) { return; }
	deck.show(deck.currentIndex+diff)
}

export function init(deck) {
	window.addEventListener("keydown", e => onKeyDown(e, deck));
	let hammer = new Hammer(window);
	hammer.on("swipeleft", e => swipeBy(+1, e, deck));
	hammer.on("swiperight", e => swipeBy(-1, e, deck));
}
