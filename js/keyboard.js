function onKeyDown(e, deck) {
	switch (e.code) {
		case "Home": deck.first(); break;
		case "End": deck.last(); break;

		case "ArrowLeft":
		case "ArrowUp":
		case "PageUp":
		case "Backspace":
			deck.prev();
		break;

		case "ArrowRight":
		case "ArrowDown":
		case "PageDown":
		case "Space":
			deck.next();
		break;

		case "CapsLock":
			deck.toggleDraw();
		break;

		case "Escape":
			let mode = deck.getAttribute("mode");
			deck.setAttribute("mode", mode == "full" ? "overview" : "full");
		break;
	}
}

export function init(deck) {
	window.addEventListener("keydown", e => onKeyDown(e, deck));
}
