import * as parser from "parser.js";
import xhr from "xhr.js";

export let slides = [];
export let current = null;

const root = document.documentElement;

function initFromString(str, node) {
	slides = parser.parse(str);

	let fragment = document.createDocumentFragment();
	slides.forEach(slide => {
		fragment.appendChild(slide.node);
	});

	node.parentNode.replaceChild(fragment, node);
	root.style.setProperty("--total", slides.length);
}

export function show(index) {
	index = Math.max(index, 0);
	index = Math.min(index, slides.length-1);

	slides.forEach((slide, i) => slide.node.classList.toggle("current", i == index));
	current = slides[index];

	window.dispatchEvent(new CustomEvent("slide-change"));
	root.style.setProperty("--current", index+1);
}

export function init(node) {
	let src = node.dataset.src;
	if (src) {
		return xhr(src).then(e => initFromString(e.target.responseText, node));
	} else {
		initFromString(node.innerHTML, node);
		return Promise.resolve();
	}
}
