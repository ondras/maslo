import * as slides from "slides.js";

function onHashChange(e) {
	slides.show(get());
}

function onSlideChange(e) {
	set(e.detail.currentIndex);
}

function get() {
	if (location.hash) {
		return Number(location.hash.substring(1))-1;
	} else {
		return 0;
	}
}

function set(index) {
	location.hash = (index ? (index+1) : "");
}

export function init() {
	slides.show(get());

	window.addEventListener("hashchange", onHashChange);
	window.addEventListener("slide-change", onSlideChange);
}
