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

export function init(deck) {
	deck.show(get());

	window.addEventListener("hashchange", _ => deck.show(get()));
	deck.addEventListener("change", e => set(e.detail.currentIndex));
}
