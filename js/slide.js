import Hammer from "hammerjs";


const HAMMER_OPTIONS = {cssProps:{}};

export default class Slide extends HTMLElement {
	#internals = this.attachInternals();

	get deck() { return this.closest("maslo-deck"); }
	get reveals() { return [...this.querySelectorAll(".reveal")]; }

	constructor() {
		super();

		this.addEventListener("click", e => {
			const { deck } = this;
			if (deck.mode == "overview") {
				e.preventDefault();
				deck.mode = "full";
				deck.currentSlide = this;
			}
		});

		let hammer = new Hammer(this, HAMMER_OPTIONS);
		hammer.on("swipeleft", e => onSwipe(e));
		hammer.on("swiperight", e => onSwipe(e));
	}

	connectedCallback() {
		this.#reset();
	}

	show() {
		setSingleState(this.#internals.states, "current");
	}

	hide(state) {
		setSingleState(this.#internals.states, state);
		this.#reset();
	}

	next() {
		const { reveals } = this;
		let firstHidden = reveals.find(node => node.hidden);
		if (firstHidden) {
			firstHidden.hidden = false;
			return true;
		} else {
			return false;
		}
	}

	#reset() {
		const { reveals } = this;
		reveals.forEach(node => node.hidden = true);
	}
}
customElements.define("maslo-slide", Slide);

function setSingleState(states, state) {
	states.delete("before");
	states.delete("after");
	states.delete("current");
	states.add(state);
}

function onSwipe(e) {
	if (e.pointerType == "mouse") { return; }
	const deck = e.target.closest("maslo-deck");

	switch (e.type) {
		case "swipeleft": deck.next(); break;
		case "swiperight": deck.prev(); break;
	}
}
