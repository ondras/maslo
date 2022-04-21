// import markdownIt from "markdown-it";
import * as syntax from "syntax.js";


function newSlide(slides) {
	let slide = document.createElement("section");
	slide.classList.add("slide");
	slides.push(slide);
	return slide;
}

export function parse(source, options) {
	let opts = Object.assign({highlight:syntax.highlight, html:true, linkify:true}, options);
	let md = markdownit(opts);
	md.use(markdownItAttrs);

	let tmp = document.createElement("div");
	tmp.innerHTML = md.render(source);

	let slides = [];
	let slide = newSlide(slides);

	Array.from(tmp.children).forEach(child => {
		if (child.nodeName == "HR") {
			slide = newSlide(slides);
		} else {
			slide.append(child);
		}
	});

	return slides;
}
