//==========
// constants
//==========
const king = 'Arthur';
chai.expect(king).to.be.eql('Arthur');

// this should trigger an error if you uncomment it
//king = 'something else';





// ===============
// arrow functions
// ===============
// basic demo
var square = (x) => {
	return x * x;
};
chai.expect(square(4)).to.be.eql(16);

// you can also write it this way
var square2 = x => x * x;
chai.expect(square2(5)).to.be.eql(25);

// throw in some jquery
$.ajax({
	url: "https://www.google.co.uk/images/srpr/logo11w.png"
}).done((result)=> { // no "function" keyword here

});

// arrow functions don't change scope
class Foo {
	testMethod() {
		this.value = 'foo';

		// if we would use a 'function' this would return 'undefined'
		var testScope = () => {
			return this.value;
		};

		return testScope();
	}
}
var fooScope = new Foo();
chai.expect(fooScope.testMethod()).to.be.eql('foo');





//========================
// computed property names
//========================
var x = 'a';
var obj = {
	[x]: 'foo',
	[(1+2)]: 'bar',
	[square(5)]: 'foo bar'
};
chai.expect(obj['a']).to.be.eql('foo');
chai.expect(obj[3]).to.be.eql('bar');
chai.expect(obj[25]).to.be.eql('foo bar');





// ===============
// block scoping
// ===============

// scope globally
let gLetScope = 'foo';
var gVarScope = 'bar';
chai.expect(gLetScope).to.be.eql('foo');
chai.expect(gVarScope).to.be.eql('bar');

// scope inside a function
function functionScoping() {
	// check access to global scope
	chai.expect(gLetScope).to.be.eql('foo');
	chai.expect(gVarScope).to.be.eql('bar');

	// function scope test
	let fLetScope = 'func foo';
	var fVarScope = 'func bar';
	chai.expect(fLetScope).to.be.eql('func foo');
	chai.expect(fVarScope).to.be.eql('func bar');
}
functionScoping();

// we should not have access to function scope here
// had some strange problems using chai to assert undefined...this is a workaround
var fLetScope = (typeof fLetScope);
chai.expect(fLetScope).to.be.eql('undefined');
var fVarScope = (typeof fVarScope);
chai.expect(fVarScope).to.be.eql('undefined');

// NOTICE
// there are few cases where the behaviour of "let" should differ from "var"
// but in my tests I did not get the expected results...not sure why.

// http://wiki.ecmascript.org/doku.php?id=harmony:let
// http://wiki.ecmascript.org/doku.php?id=harmony:block_scoped_bindings

// a simple example of that...
// 'let' is a block-scoped variable..meaning you cannot access it outside the block where it was defined
// but the following tests is failing on me
{
	let foo = 'bar';
}
//console.log(foo); // expected is undefined, but 'bar' is returned



