import * as mode from "mode.js";
import * as slides from "slides.js";

let active = false;
let cursor = null;

function onMouseDown(e) {

}

function onMouseUp(e) {
	
}

function onMouseMove(e) {
	cursor.style.left = `${e.clientX}px`;
	cursor.style.top = `${e.clientY}px`;
}

function onClick(e) {
	if (mode.current != "overview") { return; }

	let slide = slides.slides.find(slide => {
		let node = e.target;
		while (node) {
			if (node == slide.node) { return true; }
			node = node.parentNode;
		}
		return false;
	});

	if (slide) {
		slides.show(slide.index);
		mode.toggle();
	}
}

export function toggle() {
	active = !active;

	document.body.classList.toggle("cursor", active);
	if (active) {
		document.body.appendChild(cursor);
	} else {
		cursor.parentNode.removeChild(cursor);
	}
}

export function init() {
	cursor = document.createElement("div");
	cursor.id = "cursor";

	window.addEventListener("mousedown", onMouseDown);
	window.addEventListener("mousemove", onMouseMove);
	window.addEventListener("mouseup", onMouseUp);
	window.addEventListener("click", onClick);
}
