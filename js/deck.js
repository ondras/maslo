import * as parser from "./parser.js";


let documentTitle = document.title;

export default class Deck extends HTMLElement {
	#mode;
	#internals = this.attachInternals();

	get standalone() { return this.hasAttribute("standalone"); }
	get slides() { return [...this.querySelectorAll("maslo-slide:not([hidden])")]; }

	constructor() {
		super();
		this.mode = "full";

		window.addEventListener("keydown", e => onKeyDown(e, this));

		let ro = new ResizeObserver(_ => syncScale(this));
		ro.observe(this);
	}

	get currentIndex() { return this.slides.indexOf(this.currentSlide); }
	set currentIndex(index) {
		let { slides, currentIndex, standalone } = this;

		// validate
		index = Math.max(index, 0);
		index = Math.min(index, slides.length-1);
		if (index == currentIndex) { return; }

		// hide old, show new
		slides.forEach((s, i) => {
			(i == index ? s.show() : s.hide(i > index ? "after" : "before"));
		})

		// publish
		this.style.setProperty("--current", index+1);
		if (standalone) { saveIndexToUrl(index); }
		if (standalone) { document.title = `(${index+1}) ${documentTitle}`; }

		this.dispatchEvent(new CustomEvent("change"));
	}

	get currentSlide() { return this.querySelector("maslo-slide:state(current)"); }
	set currentSlide(slide) { this.currentIndex = this.slides.indexOf(slide); }

	get mode() { return this.#mode; }
	set mode(mode) {
		this.#mode = mode;

		const { states } = this.#internals;
		states.clear();
		states.add(mode);

		const { currentSlide } = this;
		if (currentSlide) { currentSlide.drawing = false; }
	}

	async connectedCallback() {
		const { standalone } = this;
		const src = this.getAttribute("src");
		let md;

		if (src) {
			let response = await fetch(src);
			md = await response.text();
		} else {
			md = this.innerHTML;
		}

		let nodes = parser.parse(md);
		this.replaceChildren(...nodes);
		this.style.setProperty("--total", nodes.length);
		this.dispatchEvent(new CustomEvent("load"));

		if (standalone) {
			this.currentIndex = getIndexFromUrl();
			window.addEventListener("popstate", _ => this.currentIndex = getIndexFromUrl());
		} else {
			this.currentIndex = 0;
		}
	}

	first() { this.currentIndex = 0; }
	last() { this.currentIndex = this.slides.length-1; }
	prev() { this.currentIndex--; }
	next() {
		const { currentSlide } = this;
		let processed = currentSlide.next();
		if (!processed) { this.currentIndex++; }
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
	let w = parseInt(style.getPropertyValue("--width"));
	let h = w / window.eval(style.getPropertyValue("--aspect-ratio"));

	deck.style.setProperty("--scale", Math.min(deckSize[0]/w, deckSize[1]/h));
}

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

		case "Escape":
			deck.mode = (deck.mode == "full" ? "overview" : "full");
		break;
	}
}
