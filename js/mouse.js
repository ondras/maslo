import * as mode from "./mode.js";
import * as draw from "./draw.js";
import * as scale from "./scale.js";


export let active = false;
let drawing = false;
let cursor = null;

function eventToPosition(e) {
	let rect = slides.nodes[slides.currentIndex].getBoundingClientRect();
	return [e.clientX-rect.left, e.clientY-rect.top].map(x => x/scale.current);
}

function onMouseDown(e) {
	if (!active || mode.current == "overview") { return; }
	drawing = true;
	draw.start(eventToPosition(e));
}

function onMouseUp(e) {
	draw.stop();
	drawing = false;
}

function onMouseMove(e) {
	cursor.style.left = `${e.clientX}px`;
	cursor.style.top = `${e.clientY}px`;

	if (drawing) {
		e.preventDefault(); // no text selection
		draw.add(eventToPosition(e));
	}
}

function onClick(e) {
	if (mode.current != "overview") { return; }

	let slide = e.target.closest("maslo-slide");
	if (!slide) { return; }

	let deck = slide.closest("maslo-deck");
	if (!deck) { return; }

	deck.show(deck.slides.indexOf(slide));
	mode.toggle();
}

export function toggle() {
	if (!active && mode.current == "overview") { return; }
	active = !active;

	document.body.classList.toggle("cursor", active);
	if (active) {
		document.body.append(cursor);
		draw.show(slides.nodes[slides.currentIndex]);
	} else {
		cursor.remove();
		draw.hide();
	}
}

function onModeChange(e) {
	if (active && e.detail.mode == "overview") { toggle(); }
}

export function init(deck) {
	cursor = document.createElement("div");
	cursor.id = "cursor";

	window.addEventListener("mousedown", onMouseDown);
	window.addEventListener("mousemove", onMouseMove);
	window.addEventListener("mouseup", onMouseUp);
	deck.addEventListener("click", onClick);

	window.addEventListener("mode-change", onModeChange);
	deck.addEventListener("change", e => {
		if (!active) { return; }
		draw.hide();
		draw.show(deck.slides[e.detail.currentIndex]);
	});
}
