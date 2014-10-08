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