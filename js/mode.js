const node = document.body;
export let current = "";

function setMode(mode) {
	if (current == mode) { return; }

	try {
		node.classList.remove(current);
	} catch (e) {}

	current = mode;
	node.classList.add(current);

	let detail = {mode}
	window.dispatchEvent(new CustomEvent("mode-change", {detail}));
}

export function toggle() {
	setMode(current == "full" ? "overview" : "full");
}

export function init() {
	setMode("full");
}
