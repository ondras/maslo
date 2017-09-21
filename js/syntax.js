export function highlight(str, lang) {
	if (lang && hljs.getLanguage(lang)) {
		let html = hljs.highlight(lang, str).value;
		return html.replace(/([^\n]*)\n/g, `<div>$1</div>`);
	} else {
		return "";
	}
}
