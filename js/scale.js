const root = document.documentElement;
let width, height;
export let current = 1;

const META = {
	name: "viewport",
	content: "width=device-width, initial-scale=1, user-scalable=no"
}

function sync() {
	let rw = window.innerWidth/width;
	let rh = window.innerHeight/height;
	current = Math.min(rw, rh);
	root.style.setProperty("--scale", current);
}

export function init() {
	let meta = document.createElement("meta");
	Object.assign(meta, META);
	document.head.appendChild(meta);

	let style = getComputedStyle(root);
	width = Number(style.getPropertyValue("--width"));
	height = Number(style.getPropertyValue("--height"));
	sync();

	window.addEventListener("resize", e => sync());
}
