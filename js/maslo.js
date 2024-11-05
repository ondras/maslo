import "./slide.js"; // FIXME register
import "./deck.js"; // FIXME register


const META = {
	name: "viewport",
	content: "width=device-width, initial-scale=1, user-scalable=no"
}

let meta = document.createElement("meta");
Object.assign(meta, META);
document.head.append(meta);
