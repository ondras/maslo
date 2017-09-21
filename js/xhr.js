export default function xhr(url) {
	let r = new XMLHttpRequest();
	r.open("get", url, true);
	r.send();
	return new Promise((resolve, reject) => {
		r.onload = resolve;
		r.onerror = reject;
	});
}
