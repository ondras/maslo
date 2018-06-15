export function load(href) {
	let node = document.createElement("link");
	node.rel = "stylesheet";
	node.href = href;
	document.head.appendChild(node);

	return new Promise((resolve, reject) => {
		node.onload = (e) => { console.log("LOADED", e); resolve(); }
		node.onerror = e => console.warn(e), resolve();
	});
}
