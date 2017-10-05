// import markdownIt from "markdown-it";
import * as syntax from "syntax.js";

function newSlide(slides) {
	let node = document.createElement("section");
	node.classList.add("slide");
	let slide = {node, index:slides.length};
	slides.push(slide);
	return slide;
}

export function parse(source) {
	let md = markdownit({highlight: syntax.highlight, html:true});
	md.use(markdownItAttrs);

	let tmp = document.createElement("div");
	tmp.innerHTML = md.render(source);

	let slides = [];
	let slide = newSlide(slides);

	Array.from(tmp.children).forEach(child => {
		if (child.nodeName == "HR") {
			slide = newSlide(slides);
		} else {
			slide.node.appendChild(child);
		}
	});

	return slides;
}
