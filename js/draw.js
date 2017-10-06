let path = [];
let paths = [];
let ctx = null;

function drawPath(path) {
	ctx.beginPath();
	path.forEach((pos, index) => {
		(index ? ctx.lineTo(pos[0], pos[1]) : ctx.moveTo(pos[0], pos[1]));
	});
	ctx.stroke();
}

function redraw() {
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	paths.forEach(drawPath);
	if (path.length > 1) { drawPath(path); }
}

function setupStyle(parent) {
	let style = getComputedStyle(parent);
	ctx.strokeStyle = style.getPropertyValue("--highlight");
	ctx.lineWidth = style.getPropertyValue("--thickness");
	ctx.lineJoin = ctx.lineCap = "round";
}

export function start(pos) {
	path.push(pos);
}

export function stop() {
	if (path.length > 1) { paths.push(path); }
	path = [];
}

export function add(pos) {
	path.push(pos);
	redraw();
}

export function show(parent) {
	parent.appendChild(ctx.canvas);
	ctx.canvas.width = parent.offsetWidth;
	ctx.canvas.height = parent.offsetHeight;
	setupStyle(parent);
}

export function hide() {
	paths = [];
	redraw();
	ctx.canvas.parentNode.removeChild(ctx.canvas);
}

export function init() {
	let canvas = document.createElement("canvas");
	canvas.id = "draw";
	ctx = canvas.getContext("2d");
}
