import markdownIt from "markdown-it";
import markdownItAttrs from "markdown-it-attrs";
import * as syntax from "./syntax.js";
import Slide from "./slide.js";


function newSlide(slides) {
	let slide = new Slide();
	slides.push(slide);
	return slide;
}

export function parse(source, options) {
	let opts = Object.assign({highlight:syntax.highlight, html:true, linkify:true}, options);
	let md = markdownIt(opts);
	md.use(markdownItAttrs);

	let tmp = document.createElement("div");
	tmp.innerHTML = md.render(source);

	let slides = [];
	let slide = newSlide(slides);

	[...tmp.children].forEach(child => {
		if (child.nodeName == "HR") {
			slide = newSlide(slides);
		} else {
			slide.append(child);
		}
	});

	return slides;
}
