HelloWorld Demo
===============

This demo is about:
 - using `class` feature
 - extending classes
 - modules (`import` and `export`)
 - default parameter value
 
## Modules (`App.js`)

```js
// import the Greeter class from GreeterModule
import Greeter from './scripts/GreeterModule';

// import the NewGreeter class from NewGreeterModule
import NewGreeter from './scripts/NewGreeterModule';

// create a Greeter class instance
var greeter = new Greeter('Hello World');
greeter.greet();

// create a NewGreeter class instance
var newGreeter = new NewGreeter('... from another world');
newGreeter.greet();
```

## Classes and module export (`GreeterModule.js`)

```js
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
```

## Extending a class (`NewGreeterModule.js`)

```js
// first import the Greeter class from the GreeterModule
import Greeter from './GreeterModule';

// create NewGreeter class that extends the Greeter class
class NewGreeter extends Greeter {
	/**
	 * NewGreeter constructor.
	 *
	 * @param string msg Message to output
	 */
	constructor(msg) {
		// construct the parent class object
		super(msg, '#new-message');
	}
};

// export the NewGreeter class from this module
export default NewGreeter;
```