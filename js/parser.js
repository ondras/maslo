import markdownIt from "markdown-it";
import markdownItAttrs from "markdown-it-attrs";
import Slide from "./slide.js";
import hljs from "highlight.js/lib/common";


function splitLines(str) {
	let lines = str.trim().split("\n");
	let openSpans = [];

	return lines.map(line => {
		let prefix = openSpans.join("");
		let spans = line.match(/<\/?span.*?>/g) || [];
		spans.forEach(span => {
			(span.startsWith("</") ? openSpans.pop() : openSpans.push(span));
		});
		let suffix = openSpans.map(_ => "</span>").join("");
		return prefix + line + suffix;
	});
}

function highlight(str, language) {
	let html = str;
	if (language && hljs.getLanguage(language)) { html = hljs.highlight(str, {language}).value; }
	let lines = splitLines(html).map(line => `<div class="line"><code>${line}</code></div>`);
	return `<pre>${lines.join("")}</pre>`;
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
