export default class Canvas extends HTMLElement {
	#ac;
	#ctx;
	#cursor;
	#drawing = false;
	#commands = [];

	constructor() {
		super();

		const canvas = document.createElement("canvas");
		this.#ctx = canvas.getContext("2d");

		const cursor = document.createElement("div");
		cursor.className = "cursor";
		this.#cursor = cursor;

		this.append(canvas, cursor);
	}

	connectedCallback() {
		const { canvas } = this.#ctx;
		canvas.width = this.offsetWidth;
		canvas.height = this.offsetHeight;
		setupStyle(this.#ctx);

		let ac = new AbortController();
		const { signal } = ac;

		this.addEventListener("pointerdown", e => this.#onPointerDown(e), {signal});
		this.addEventListener("pointermove", e => this.#onPointerMove(e), {signal});
		this.addEventListener("pointerup", e => this.#onPointerUp(e), {signal});

		this.#ac = ac;
	}

	disconnectedCallback() {
		this.#ac.abort();
	}

	#onPointerDown(e) {
		this.#drawing = true;
	}

	#onPointerMove(e) {
		let [x, y] = eventToPosition(e, this);
		this.#cursor.style.left = `${x}px`;
		this.#cursor.style.top = `${y}px`;

		let commands = this.#commands;
		let command = { x, y };

		if (this.#drawing) {
			command.type = "l";
			commands.push(command);
			this.#draw();
		} else {
			command.type = "m";
			if (commands.length > 0 && commands[commands.length-1].type == "m") {
				commands[commands.length-1] = command;
			} else {
				commands.push(command);
			}
		}
	}

	#onPointerUp(e) {
		this.#drawing = false;
	}

	#draw() {
		const ctx = this.#ctx;
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

		ctx.beginPath();
		this.#commands.forEach(c => {
			switch (c.type) {
				case "m": this.#ctx.moveTo(c.x, c.y); break;
				case "l": this.#ctx.lineTo(c.x, c.y); break;
			}
		});
		ctx.stroke();
	}
}
customElements.define("maslo-canvas", Canvas);

function eventToPosition(e, canvas) {
	let rect = canvas.getBoundingClientRect();
	let sx = canvas.offsetWidth / rect.width;
	let sy = canvas.offsetHeight / rect.height;

	return [
		Math.round((e.clientX - rect.left) * sx),
		Math.round((e.clientY - rect.top) * sy)
	];
}

function setupStyle(ctx) {
	let style = getComputedStyle(ctx.canvas);
	ctx.strokeStyle = style.getPropertyValue("--highlight");
	ctx.lineWidth = style.getPropertyValue("--brush");
	ctx.lineJoin = ctx.lineCap = "round";
}
