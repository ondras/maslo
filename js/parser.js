// import markdownIt from "markdown-it";
import * as syntax from "syntax.js";


function newSlide(slides) {
	let slide = document.createElement("section");
	slide.classList.add("slide");
	slides.push(slide);
	return slide;
}

export function parse(source) {
	let md = markdownit({highlight:syntax.highlight, html:true, linkify:true});
	md.use(markdownItAttrs);

	let tmp = document.createElement("div");
	tmp.innerHTML = md.render(source);

	let slides = [];
	let slide = newSlide(slides);

	Array.from(tmp.children).forEach(child => {
		if (child.nodeName == "HR") {
			slide = newSlide(slides);
		} else {
			slide.appendChild(child);
		}
	});

	return slides;
}
