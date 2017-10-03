let active = false;
let cursor = null;

function onMouseMove(e) {
	cursor.style.left = `${e.clientX}px`;
	cursor.style.top = `${e.clientY}px`;
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

	window.addEventListener("mousemove", onMouseMove);
}
