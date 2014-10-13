// ====================================================================================================================
// Default parameters
// Default function parameters allow formal parameters to be initialized with default values
// if no value or undefined is passed.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
// ====================================================================================================================

function multiplyBy(param1, param2 = 2) {
	return param1 * param2;
}
chai.expect(multiplyBy(5)).to.be.eql(10);
chai.expect(multiplyBy(5, 3)).to.be.eql(15);
chai.expect(multiplyBy(5, undefined)).to.be.eql(10);


// ====================================================================================================================
// Rest parameters
// The rest parameter syntax allows to represent an indefinite number of arguments as an array.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
// ====================================================================================================================

function addNumbers(...numbers) {
	var result = 0;
	numbers.forEach((num)=> {
		result += num;
	});
	return result;
}
chai.expect(addNumbers(1, 2, 3)).to.be.eql(6);

function multiplyNumsBy(multiplier, ...numbers) {
	var result = new Array();
	numbers.forEach((num)=> {
		result.push(num * multiplier);
	});
	return result;
}
multiplyNumsBy(2, 1, 2, 3);
// [2, 4, 6]


// ====================================================================================================================
// Spread parameters
// The spread operator allows an expression to be expanded in places where multiple
// arguments (for function calls) or multiple elements (for array literals) are expected.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
// ====================================================================================================================
function funcWithALotOfParams(param1, param2, param3, param4) {
	return param1 + ' ' + param2 + ' ' + param3 + ' ' + param4;
}
var params = ['a', 'b', 'c', 'd'];
var result = funcWithALotOfParams(...params);
chai.expect(result).to.be.eql('a b c d');


// ====================================================================================================================
// Destructuring assignment
// The destructuring assignment syntax is a JavaScript expression that makes it possible to extract data
// from arrays or objects using a syntax that mirrors the construction of array and object literals.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// ====================================================================================================================

// Array destructuring
var [a, b, c] = ['one', 'two', 'three'];
chai.expect(a).to.be.eql('one');
chai.expect(b).to.be.eql('two');
chai.expect(c).to.be.eql('three');

var [d, [e], [f]] = ['4', ['five.zero', 'five.one'], 'six'];
chai.expect(d).to.be.eql('4');
chai.expect(e).to.be.eql('five.zero');
chai.expect(f).to.be.eql('s');

var foo = ["one", "two", "three"];
var [one, two, three] = foo;
chai.expect(one).to.be.eql('one');
chai.expect(two).to.be.eql('two');
chai.expect(three).to.be.eql('three');

// return multiple vars from a function
function fooBarTest() {
	return [1, 2];
}
var [a, b] = fooBarTest();
chai.expect(a).to.be.eql(1);
chai.expect(b).to.be.eql(2);

// ignore some of the returned vars
function fooBarTestIgnored() {
	return [1, 2, 3];
}
var [fooA, ,fooB] = fooBarTestIgnored();
chai.expect(fooA).to.be.eql(1);
chai.expect(fooB).to.be.eql(3);


// Object destructuring
var obj = {name: 'Jim', sex: 'Male'};
var {name, sex} = obj; // names must match the keys
chai.expect(name).to.be.eql('Jim');
chai.expect(sex).to.be.eql('Male');

var {foo} = obj;
// console.log(foo); // foo is undefined because it doesn't match a key inside the object

var {sex} = obj;
chai.expect(sex).to.be.eql('Male'); // on objects parameters are extracted by name, not order

// assign the variables with different names than the defined keys
var {name: foo, sex: bar} = obj; // you can't put the brackets around the key name
chai.expect(foo).to.be.eql('Jim');
chai.expect(bar).to.be.eql('Male');

// we use object destructuring in module loader
//const { Loader, main } = require('toolkit/loader');

// nested objects
var data = {
	'title': 'Article demo',
	'innerData': [
		{
			'subTitle': 'Foo bar',
			'author': 'Jim'
		},
		{
			'subTitle': 'Bar bar',
			'author': 'Jill'
		}
	],
	'link': 'http://google.com'
};

var {title: myTitle, innerData: [{author}, {author: secondAuthor}], link} = data;
chai.expect(myTitle).to.be.eql('Article demo');
chai.expect(author).to.be.eql('Jim');
chai.expect(secondAuthor).to.be.eql('Jill');
chai.expect(link).to.be.eql('http://google.com');

// iterations
var authors = [
	{name: 'Jill', sex: 'Female'},
	{name: 'Jack', sex: 'Male'}
];

for (var {name, sex} of authors) {
	//console.log(name+' '+sex);
}
// Jill Female
// Jack Male

// pulling fields from objects as function parameters
function createAuthorTitle({title: displayTitle, innerData: [{author}]}) {
	return displayTitle + ' ' + author;
}
var fooTitle = createAuthorTitle(data);
chai.expect(fooTitle).to.be.eql('Article demo Jim');