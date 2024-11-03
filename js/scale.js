const META = {
	name: "viewport",
	content: "width=device-width, initial-scale=1, user-scalable=no"
}

export function sync(deck) {
	let deckSize = [deck.offsetWidth, deck.offsetHeight];

	let style = getComputedStyle(deck);
	let w = Number(style.getPropertyValue("--width"));
	let h = w / window.eval(style.getPropertyValue("--aspect-ratio"));

	deck.style.setProperty("--scale", Math.min(deckSize[0]/w, deckSize[1]/h));
}

export function init(deck) {
	// fixme
	let meta = document.createElement("meta");
	Object.assign(meta, META);
	document.head.append(meta);

	sync(deck);
	window.addEventListener("resize", _ => sync(deck));
}
