import * as slides from "slides.js";
import * as mouse from "mouse.js";

function onKeyDown(e) {
    switch (e.code) {
        case "Home": slides.show(0); break;
        case "End": slides.show(slides.slides.length-1); break;

        case "ArrowLeft":
        case "ArrowUp":
        case "PageUp":
        case "Backspace":
            slides.show(slides.current.index-1);
        break;

        case "ArrowRight":
        case "ArrowDown":
        case "PageDown":
        case "Space":
            slides.show(slides.current.index+1);
        break;

        case "CapsLock":
        	mouse.toggle();
        break;
    }
}

export function init() {
    window.addEventListener("keydown", onKeyDown);
    let hammer = new Hammer(window);
    hammer.on("swipeleft", () => slides.show(slides.current.index+1));
    hammer.on("swiperight", () => slides.show(slides.current.index-1));
}
