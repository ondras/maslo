import Hammer from "hammerjs";


export default class Slide extends HTMLElement {
	#internals = this.attachInternals();

	get deck() { return this.closest("maslo-deck"); }

	constructor() {
		super();

		console.log(this.#internals)
		this.addEventListener("click", e => {
			const { deck } = this;
			if (deck.mode == "overview") {
				e.preventDefault();
				deck.mode = "full";
				deck.currentSlide = this;
			}
		});

		let hammer = new Hammer(this, {cssProps:{}});
		hammer.on("swipeleft", e => onSwipe(e));
		hammer.on("swiperight", e => onSwipe(e));
	}

	show() {
		const { states } = this.#internals;
		states.delete("before");
		states.delete("after");
		states.add("current")
	}

	hide(state) {
		const { states } = this.#internals;
		states.delete("current");
		states.delete("before");
		states.delete("after");
		states.add(state)
	}

	next() { return false; }
}
customElements.define("maslo-slide", Slide);

function onSwipe(e) {
	if (e.pointerType == "mouse") { return; }
	const deck = e.target.closest("maslo-deck");

	switch (e.type) {
		case "swipeleft": deck.next(); break;
		case "swiperight": deck.prev(); break;
	}
}
