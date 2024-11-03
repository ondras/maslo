import markdownIt from "markdown-it";
import markdownItAttrs from "markdown-it-attrs";
import Slide from "./slide.js";
import hljs from "highlight.js/lib/common";


function highlight(str, language) {
	if (language && hljs.getLanguage(language)) {
		let html = hljs.highlight(str, {language}).value;
		return html.replace(/([^\n]*)\n/g, `<div>$1</div>`);
	} else {
		return "";
	}
}

export function parse(source) {
	let md = markdownIt({highlight, html:true, linkify:true});
	md.use(markdownItAttrs);

	let tmp = document.createElement("div");
	tmp.innerHTML = md.render(source);

	let slide = new Slide();
	let slides = [slide];

	[...tmp.children].forEach(child => {
		if (child.nodeName == "HR") {
			slide = new Slide();
			slides.push(slide);
		} else {
			slide.append(child);
		}
	});

	return slides;
}
