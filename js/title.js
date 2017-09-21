import * as slides from "slides.js";

const title = document.title;

function onSlideChange(e) {
    document.title = `(${slides.current.index+1}) ${title}`;
}

export function init() {
    window.addEventListener("slide-change", onSlideChange);
}
