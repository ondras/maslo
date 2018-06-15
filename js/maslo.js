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

function initStyles(skin) {
	console.log("initStyles");
	function loadApp() { console.log("loadApp"); return style.load(makeURL("maslo.css")); }
	function loadSkin() { console.log("loadSkin"); return skin ? style.load(makeURL(`skin/${skin}.css`)) : Promise.resolve(); }

	return loadApp().then(loadSkin);
}

function initApp() {
	console.log("initApp");
	[scale, control, title, mouse, draw, mode, url].forEach(c => c.init());
	window.dispatchEvent(new CustomEvent("slides-load"));
}

function error(e) {
	console.log(e);
	alert("Error loading the app, see console for more details.");
}

function init(selector) {
	let node = document.querySelector(selector);
	function initSlides() { return slides.init(node); }

	let skin = ("skin" in node.dataset ? node.dataset.skin : "dark");
	initStyles(skin).then(initSlides).then(initApp).catch(error);
}

init(document.currentScript.dataset.selector || "template");
