import * as mode from "mode.js";
import * as slides from "slides.js";
import * as draw from "draw.js";

let active = false;
let drawing = false;
let cursor = null;

function eventToPosition(e) {
	return [e.clientX, e.clientY];
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

	if (drawing) { draw.add(eventToPosition(e)); }
}

function onClick(e) {
	if (mode.current != "overview") { return; }

	let index = slides.findIndex(e.target);
	if (index > -1) {
		slides.show(index);
		mode.toggle();
	}
}

export function toggle() {
	if (!active && mode.current == "overview") { return; }
	active = !active;

	document.body.classList.toggle("cursor", active);
	if (active) {
		document.body.appendChild(cursor);
		draw.show(slides.nodes[slides.currentIndex]);
	} else {
		cursor.parentNode.removeChild(cursor);
		draw.hide();
	}
}

function onModeChange(e) {
	if (active && mode.current == "overview") { toggle(); }
}

function onSlideChange(e) {
	if (!active) { return; }
	draw.hide();
	draw.show(slides.nodes[slides.currentIndex]);
}

export function init() {
	cursor = document.createElement("div");
	cursor.id = "cursor";

	window.addEventListener("mousedown", onMouseDown);
	window.addEventListener("mousemove", onMouseMove);
	window.addEventListener("mouseup", onMouseUp);
	window.addEventListener("click", onClick);

	window.addEventListener("mode-change", onModeChange);
	window.addEventListener("slide-change", onSlideChange);
}
