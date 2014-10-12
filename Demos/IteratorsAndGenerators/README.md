Iterators & Generators Demo
===============

This demo is about:
 - Iterators
 - Generators
 
# Demo
// ====================================================================================================================
// Iterator protocol
// An iterator has a method called next. This method returns an object with two properties:
// 	- value (any value)
//  - done (will be read as a boolean).
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/The_Iterator_protocol
// ====================================================================================================================
function fooIterator() {
	var i = 0;

	return {
		next: ()=> {
			return {value: i++, done: false}
		}
	}
}

var it = fooIterator();
// console.log(it.next().value); // 0
// console.log(it.next().value); // 1
// console.log(it.next().value); // 2


// ====================================================================================================================
// iterable
// The "iterable" protocol allows JavaScript objects to define or customize their iteration behavior,
// such as what values are looped over in a for..of construct. Some built-in types, such as Array or Map,
// have a default iteration behavior, while other types (such as Object) do not.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/iterable
// ====================================================================================================================
// objects don't have iterators, but you can build one
function objFooIterator(obj) {
	return {
		[Symbol.iterator]: ()=> {
			var index = 0;
			var current;
			return {
				next: ()=> {
					if (index < 2) {
						var value = (index < 1) ? obj.name : obj.sex;
						var done = (index < 2) ? false : true;
						index++;
						return {
							value: value,
							done: done
						}
					} else {
						return {
							value: undefined,
							done: true
						}
					}
				}
			}
		}
	}
}

var obj = {
	'name': 'Jack',
	'sex': 'Male'
};

var itObj = objFooIterator(obj);
for (var item of itObj) {
	//console.log(item);
}
// Jack
// Male


// ====================================================================================================================
// Generators (function*)
// function* (function keyword followed by an asterisk) defines a generator function.
// Generators are functions which can be exited and later re-entered. Their context (variable bindings)
// will be saved across re-entrances.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
// ====================================================================================================================
function* fooGen(){
	var index = 0;
	while(true) {
		yield index++;
	}
}
var genDemo = fooGen();
// console.log(genDemo.next().value); // 0
// console.log(genDemo.next().value); // 1
// console.log(genDemo.next().value); // 2
```