const root = document.documentElement;
export let current = 1;

const META = {
	name: "viewport",
	content: "width=device-width, initial-scale=1, user-scalable=no"
}

function sync() {
	let port = [window.innerWidth, window.innerHeight];

	let style = getComputedStyle(root);
	let target = ["width", "height"].map(prop => Number(style.getPropertyValue(`--${prop}`)));

	current = Math.min(port[0]/target[0], port[1]/target[1]);
	root.style.setProperty("--scale", current);
}

export function init() {
	let meta = document.createElement("meta");
	Object.assign(meta, META);
	document.head.append(meta);

	sync();
	window.addEventListener("resize", e => sync());
}
