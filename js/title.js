const title = document.title;

function onSlideChange(e) {
	document.title = `(${e.detail.currentIndex+1}) ${title}`;
}

export function init() {
	window.addEventListener("slide-change", onSlideChange);
}
