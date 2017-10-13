import * as style from "style.js";
import * as slides from "slides.js";

import * as scale from "scale.js";
import * as control from "control.js";
import * as url from "url.js";
import * as title from "title.js";
import * as mouse from "mouse.js";
import * as draw from "draw.js";
import * as mode from "mode.js";

function initStyles(skin = "dark") {
	function loadApp() { return style.load("maslo.css"); }
	function loadSkin() { return style.load(`skin/${skin}.css`); }

	return loadApp().then(loadSkin);
}

function initApp() {
	[scale, control, title, mouse, draw, mode, url].forEach(c => c.init());
}

function error(e) {
	console.log(e);
	alert("Error loading the app, see console for more details.");
}

function init(selector) {
	let node = document.querySelector(selector);
	function initSlides() { return slides.init(node); }

	initStyles(node.dataset.skin).then(initSlides).then(initApp).catch(error);
}

init(document.currentScript.dataset.selector || "template");
