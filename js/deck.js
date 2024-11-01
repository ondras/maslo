import * as style from "./style.js";
import * as parser from "./parser.js";
import * as url from "./url.js";
import * as mouse from "./mouse.js";
import * as control from "./control.js";


const base = document.currentScript.src;

function makeURL(rel) {
	return new URL(rel, base).href;
}

async function initStyles(skin) {
	skin && await style.load(makeURL(`skin/${skin}.css`));
	return style.load(makeURL("maslo.css"));
}

export default class Deck extends HTMLElement {
	constructor() {
		super();
	}

	get slides() { return [...this.querySelectorAll("maslo-slide")]; }
	get currentIndex() {
		return this.slides.findIndex(slide => slide.classList.contains("current"));
	}

	async connectedCallback() {
		let skin = this.hasAttribute("skin") ? this.getAttribute("skin") : "dark";
		await initStyles(skin);

		let options = {};

		// FIXME
		if ("linkify" in this.dataset) { options.linkify = (this.dataset.linkify == "true"); }

		let src = this.getAttribute("src");
		let md = "";

		if (src) {
			let response = await fetch(src);
			md = await response.text();
		} else {
			md = this.innerHTML;
		}

		let nodes = parser.parse(md, options);
		this.replaceChildren(...nodes);
		this.style.setProperty("--total", nodes.length);

//		[scale, control, title, mouse, draw, mode, url].forEach(c => c.init());

		this.dispatchEvent(new CustomEvent("load"));

		this.setAttribute("mode", "full"); // fixme

		mouse.init(this);
		control.init(this);
		url.init(this);
	}

	show(index) {
		let { slides, currentIndex } = this;

		index = Math.max(index, 0);
		index = Math.min(index, slides.length-1);
		if (index == currentIndex) { return; }

		currentIndex = index;
		slides.forEach((slide, i) => slide.classList.toggle("current", i == currentIndex));
		this.style.setProperty("--current", currentIndex+1);

		let detail = {currentIndex};
		this.dispatchEvent(new CustomEvent("change", {detail}));
	}
}

customElements.define("maslo-deck", Deck);
