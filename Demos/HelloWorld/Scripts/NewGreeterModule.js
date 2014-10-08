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