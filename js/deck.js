import * as style from "./style.js";
import * as parser from "./parser.js";
import * as keyboard from "./keyboard.js";
import Canvas from "./canvas.js";


let baseStylePromise = null;
let documentTitle = document.title;
const USE_URL = 1; // fixme
const USE_TITLE = 1; // fixme

export default class Deck extends HTMLElement {
	static get observedAttributes() { return ["src", "skin"]; }
	#mode;
	#internals;

	constructor() {
		super();
		keyboard.init(this);

		this.#internals = this.attachInternals();

		if (!baseStylePromise) { baseStylePromise = style.load("maslo.css"); }

		if (USE_URL) {
			window.addEventListener("popstate", _ => this.currentIndex = getIndexFromUrl());
		}

		this.mode = "full";

		let ro = new ResizeObserver(_ => syncScale(this));
		ro.observe(this);
	}

	get title() { return documentTitle; } // fixme
	get slides() { return [...this.querySelectorAll("maslo-slide")]; }

	get currentIndex() { return this.slides.findIndex(slide => slide.classList.contains("current")); }
	set currentIndex(index) {
		let { slides, currentIndex } = this;

		index = Math.max(index, 0);
		index = Math.min(index, slides.length-1);
		if (index == currentIndex) { return; }

		slides.forEach((slide, i) => slide.classList.toggle("current", i == index));

		const { currentSlide } = this;
		if (index > currentIndex) { currentSlide.first(); } else { currentSlide.last(); }

		currentIndex = index;
		this.style.setProperty("--current", currentIndex+1);

		if (USE_URL) { saveIndexToUrl(currentIndex); }
		if (USE_TITLE) { document.title = `(${currentIndex+1}) ${this.title}`; }

		this.dispatchEvent(new CustomEvent("change"));
	}

	get currentSlide() { return this.slides[this.currentIndex]; }
	set currentSlide(slide) { this.currentIndex = this.slides.indexOf(slide); }

	get scale() { return Number(this.style.getPropertyValue("--scale")); }

	get mode() { return this.#mode; }
	set mode(mode) {
		this.#mode = mode;

		const { states } = this.#internals;
		states.clear();
		states.add(mode);
	}

	attributeChangedCallback(name, oldValue, newValue) {
		switch (name) {
			case "src": this.#load(newValue); break;

			case "skin":
				baseStylePromise.then(async _ => {
					await style.load(`skin/${newValue}.css`);
					syncScale(this);
				})
			break;
		}
	}

	async connectedCallback() {
		if (!this.hasAttribute("src")) {
			let blob = new Blob([this.innerHTML], {type: "text/markdown"});
			let url = URL.createObjectURL(blob);
			await this.#load(url);
		}
	}

	first() {
		this.currentIndex = 0;
	}

	last() {
		this.currentIndex = this.slides.length-1;
		this.currentSlide.last();
	}

	next() {
		const { currentSlide } = this;
		let processed = currentSlide.next();
		if (!processed) { this.currentIndex++; }
	}

	prev() {
		const { currentSlide } = this;
		let processed = currentSlide.prev();
		if (!processed) { this.currentIndex--; }
	}

	toggleDraw() {
		const { currentSlide } = this;
		let old = currentSlide.querySelector("maslo-canvas");
		if (old) { old.remove(); return; }

		let canvas = new Canvas();
		currentSlide.append(canvas);
		// FIXME
	}

	async #load(src) {
		let response = await fetch(src);
		let md = await response.text();

		let nodes = parser.parse(md);
		this.replaceChildren(...nodes);
		this.style.setProperty("--total", nodes.length);
		this.dispatchEvent(new CustomEvent("load"));

		this.currentIndex = (USE_URL ? getIndexFromUrl() : 0);
	}
}

customElements.define("maslo-deck", Deck);


function getIndexFromUrl() {
	let url = new URL(location.href);
	return (url.hash ? Number(url.hash.substring(1))-1 : 0);
}

function saveIndexToUrl(index) {
	history.replaceState(null, "", `#${index+1}`);
}

function syncScale(deck) {
	let deckSize = [deck.offsetWidth, deck.offsetHeight];

	let style = getComputedStyle(deck);
	let w = Number(style.getPropertyValue("--width"));
	let h = w / window.eval(style.getPropertyValue("--aspect-ratio"));

	deck.style.setProperty("--scale", Math.min(deckSize[0]/w, deckSize[1]/h));
}
