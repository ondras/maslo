export default class Slide extends HTMLElement {
	first() {}
	last() {}
	next() { return false; }
	prev() { return false; }
}
customElements.define("maslo-slide", Slide);
