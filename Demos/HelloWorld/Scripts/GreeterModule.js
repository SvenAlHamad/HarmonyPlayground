// GreeterModule only exports Greeter class

// create and export Greeter class
export default class Greeter {

	/**
	 * Greeter constructor.
	 *
	 * @param string msg Message that should be outputted.
	 * @param string el Element where we should output the message. Default element is `#message`.
	 */
	constructor(msg, el='#message') {
		this.message = msg;
		this.el = el;
	}

	/**
	 * Greet method that places the message into the element inside the DOM.
	 */
	greet() {
		var element = document.querySelector(this.el);
		element.innerHTML = this.message;
	}
};