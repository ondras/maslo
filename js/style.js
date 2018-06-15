export function load(href) {
	console.log("load", href);
	let node = document.createElement("link");
	node.rel = "stylesheet";
	node.href = href;
	document.head.appendChild(node);

	return new Promise((resolve, reject) => {
		node.onload = (e) => { console.log("style onload", e); resolve(); }
		node.onloadeddata = e => {console.log("style onloadeddata", e); }
		node.onloadstart = e => {console.log("style onloadstart", e); }
		node.onerror = e => console.warn(e), resolve();
	});
}
