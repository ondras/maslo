import * as style from "./style.js";
import * as parser from "./parser.js";
import * as keyboard from "./keyboard.js";
import * as scale from "./scale.js";


let baseStylePromise = null;
let documentTitle = document.title;
const USE_URL = 1; // fixme
const USE_TITLE = 1; // fixme

export default class Deck extends HTMLElement {
	static get observedAttributes() { return ["src", "skin", "mode"]; }

	constructor() {
		super();
		keyboard.init(this);

		if (!baseStylePromise) { baseStylePromise = style.load("maslo.css"); }
		baseStylePromise.then(() => scale.init(this));

		if (USE_URL) {
			window.addEventListener("popstate", _ => this.currentIndex = getIndexFromUrl());
		}
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

	attributeChangedCallback(name, oldValue, newValue) {
		switch (name) {
			case "src": this.#load(newValue); break;

			case "skin":
				baseStylePromise.then(async _ => {
					await style.load(`skin/${newValue}.css`);
					scale.sync(this);
				})
			break;

			case "mode":
			break;
		}
	}

	async connectedCallback() {
		if (!this.hasAttribute("src")) {
			let blob = new Blob([this.innerHTML], {type: "text/markdown"});
			let url = URL.createObjectURL(blob);
			await this.#load(url);
		}

		if (!this.hasAttribute("mode")) { this.setAttribute("mode", "full"); }
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
