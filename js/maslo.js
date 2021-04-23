import * as style from "style.js";
import * as slides from "slides.js";
import * as scale from "scale.js";
import * as control from "control.js";
import * as url from "url.js";
import * as title from "title.js";
import * as mouse from "mouse.js";
import * as draw from "draw.js";
import * as mode from "mode.js";

const base = document.currentScript.src;

function makeURL(rel) {
	return new URL(rel, base).href;
}

async function initStyles(skin) {
	skin && await style.load(makeURL(`skin/${skin}.css`));
	return style.load(makeURL("maslo.css"));
}

async function init(selector) {
	let node = document.querySelector(selector);
	let skin = ("skin" in node.dataset ? node.dataset.skin : "dark");

	try {
		await initStyles(skin);
		await slides.init(node);
		[scale, control, title, mouse, draw, mode, url].forEach(c => c.init());
	} catch (e) {
		console.log(e);
		alert("Error loading the app, see console for more details.");
	}

	window.dispatchEvent(new CustomEvent("slides-load"));
}

init(document.currentScript.dataset.selector || "template");
