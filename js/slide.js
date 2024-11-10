import Hammer from "hammerjs";
import Canvas from "./canvas.js";


const HAMMER_OPTIONS = {cssProps:{}};

export default class Slide extends HTMLElement {
	#internals = this.attachInternals();
	#hammer;

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
	}

	get drawing() { return !!this.querySelector("maslo-canvas"); }
	set drawing(drawing) {
		if (drawing == this.drawing) { return; }

		if (drawing) {
			this.append(new Canvas());
		} else {
			this.querySelector("maslo-canvas").remove();
		}
	}

	connectedCallback() {
		this.#reset();
	}

	handleEvent(e) {
		if (e.type == "keydown") {
			switch (e.code) {
				case "CapsLock": this.drawing = !this.drawing; break;
			}
		} else {
			if (e.pointerType == "mouse") { return; }
			const { deck } = this;
			switch (e.type) {
				case "swipeleft": deck.next(); break;
				case "swiperight": deck.prev(); break;
			}
		}
	}

	show() {
		const { states } = this.#internals;
		states.clear();
		states.add("current");

		let hammer = new Hammer(this, HAMMER_OPTIONS);
		hammer.on("swipeleft swiperight", e => this.handleEvent(e));
		this.#hammer = hammer;

		window.addEventListener("keydown", this);
	}

	hide(state) {
		const { states } = this.#internals;
		states.clear();
		states.add(state);

		this.drawing = false;
		this.#reset();

		if (this.#hammer) {
			this.#hammer.destroy();
			this.#hammer = null;
		}

		window.removeEventListener("keydown", this);
	}

	next() {
		let firstHidden = this.reveals.find(node => node.hidden);
		if (firstHidden) { firstHidden.hidden = false; }
		return firstHidden;
	}

	#reset() {
		this.reveals.forEach(node => node.hidden = true);
	}
}
customElements.define("maslo-slide", Slide);
