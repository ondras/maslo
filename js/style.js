export function load(href) {
	let node = document.createElement("link");
	node.rel = "stylesheet";
	node.href = href;
	const parent = document.head;
	parent.insertBefore(node, parent.firstChild);

	return new Promise(resolve => {
		node.onload = resolve;
		node.onerror = e => resolve(console.warn(e));
	});
}
