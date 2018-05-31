import * as parser from "parser.js";
import xhr from "xhr.js";

export let nodes = [];
export let currentIndex = -1;

const root = document.documentElement;

function initFromString(str, node) {
	nodes = parser.parse(str);

	let fragment = document.createDocumentFragment();
	nodes.forEach(node => fragment.appendChild(node));

	node.parentNode.replaceChild(fragment, node);
	root.style.setProperty("--total", nodes.length);
}

export function findIndex(node) {
	return nodes.findIndex(slide => {
		let tmp = node;
		while (tmp) {
			if (tmp == slide) { return true; }
			tmp = tmp.parentNode;
		}
		return false;
	});
}

export function show(index) {
	index = Math.max(index, 0);
	index = Math.min(index, nodes.length-1);
	if (index == currentIndex) { return; }

	currentIndex = index;
	nodes.forEach((node, i) => node.classList.toggle("current", i == currentIndex));

	let detail = {currentIndex};
	window.dispatchEvent(new CustomEvent("slide-change", {detail}));
	root.style.setProperty("--current", currentIndex+1);
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
