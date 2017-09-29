import * as scale from "scale.js";
import * as control from "control.js";
import * as slides from "slides.js";
import * as url from "url.js";
import * as title from "title.js";
import * as style from "style.js";

function initStyles(skin = "dark") {
	function loadApp() { return style.load("app.css"); }
	function loadSkin() { return style.load(`skin/${skin}.css`); }

	return loadApp().then(loadSkin);
}

function initApp() {
	document.body.classList.add("full");
	scale.init();
	control.init();
	title.init();
	url.init();
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
