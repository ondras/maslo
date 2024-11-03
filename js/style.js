const base = document.currentScript.src;

function makeURL(rel) {
	return new URL(rel, base).href;
}

export function load(name) {
	let node = document.createElement("link");
	node.rel = "stylesheet";
	node.href = makeURL(name);
	document.head.append(node);

	return new Promise(resolve => {
		node.onload = () => resolve(node);
		node.onerror = e => resolve(console.warn(e));
	});
}
