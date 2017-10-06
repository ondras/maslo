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
}

export function hide() {
	paths = [];
	redraw();
	ctx.canvas.parentNode.removeChild(ctx.canvas);
}

export function init() {
	let canvas = document.createElement("canvas");
	ctx = canvas.getContext("2d");
	ctx.strokeStyle = "red";
	ctx.lineWidth = 10;
	ctx.lineJoin = ctx.lineCap = "round";
}
