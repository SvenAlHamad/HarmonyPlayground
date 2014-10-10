// simple array constructor
[];
// []

// array with items
['one', 'two', 'three'];
// ['one', 'two', 'three']

// array class
new Array();
// []

new Array(5);
// []


// ====================================================================================================================
// Array.from(arrayLike[, mapFn[, thisArg]])
// The Array.from() method creates a new Array instance from an array-like or iterable object.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
// ====================================================================================================================
Array.from(['one', 'two', 'three']);
// ['one', 'two', 'three']

Array.from([0, , 2]);
// [ 0, undefined, 2 ]

Array.from(new Array(5), ()=> {
	return 'a';
});
// ["a", "a", "a", "a", "a"]

Array.from(new Array(3), (x, i)=> {
	return String.fromCharCode(i + 65);
});
// ["A", "B", "C"]

// foreach loop with arrow function
['one', 'two', 'three'].forEach((item)=> {
	// one, two, tree
});


// ====================================================================================================================
// Array.map(callback[, thisArg])
// The map() method creates a new array with the results of calling a provided function on every element in this array.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// ====================================================================================================================
var squares = [1, 2, 3, 4].map((i)=> {
	return i * i;
});
// [1, 4, 9, 16]


// ====================================================================================================================
// Array.filter(callback[, thisArg])
// The filter() method creates a new array with all elements that pass the test implemented by the provided function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// ====================================================================================================================
squares.filter((i)=> {
	return i > 5;
});
// [9, 16]


// ====================================================================================================================
// Array.find(callback[, thisArg])
// The find() method returns a value in the array, if an element in the array satisfies the provided testing function.
// Otherwise undefined is returned.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// ====================================================================================================================
[1, 2, 3, 4].find((elem)=> {
	return elem > 2;
});
// 3


// ====================================================================================================================
// Array.findIndex(callback[, thisArg])
// The findIndex() method returns an index in the array, if an element in the array satisfies the provided testing function.
// Otherwise -1 is returned.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
// ====================================================================================================================
['one', 'two', 'three'].findIndex((elem)=> {
	return 'two' == elem;
});
// 1


// ====================================================================================================================
// Array.keys()
// The keys() method returns a new Array Iterator that contains the keys for each index in the array.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys
// ====================================================================================================================
var keys = ['one', 'two', 'three'].keys();
// keys.next().value; // 0
// keys.next().value; // 1
// keys.next().value; // 2
// keys.next().done;  // true


// ====================================================================================================================
// Array.entries()
// The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries
// ====================================================================================================================
var entries = ['one', 'two', 'three'].entries();
entries.next().value; // [0, "one"]
entries.next().value; // [1, "two"]
entries.next().value; // [2, "three"]
entries.next().done;  // true


// ====================================================================================================================
// Array.fill(value[, start = 0[, end = this.length]])
// The fill() method fills all the elements of an array from a start index to an end index with a static value.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
// ====================================================================================================================
[1, 2, 3].fill(4);				// [4, 4, 4]
[1, 2, 3].fill(4, 1);			// [1, 4, 4]
[1, 2, 3].fill(4, 1, 2);		// [1, 4, 3]
[1, 2, 3].fill(4, 1, 1);		// [1, 2, 3]
[1, 2, 3].fill(4, -3, -2);		// [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN);	// [1, 2, 3]


// ====================================================================================================================
// Array.indexOf(searchElement[, fromIndex = 0])
// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// ====================================================================================================================
['one', 'two', 'three', 'one', 'two', 'three', 'one', 'two', 'three'].indexOf('two');
// 1

// ====================================================================================================================
// Array.lastIndexOf(searchElement[, fromIndex = arr.length])
// The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it
// is not present. The array is searched backwards, starting at fromIndex.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
// ====================================================================================================================
['one', 'two', 'three', 'one', 'two', 'three', 'one', 'two', 'three'].lastIndexOf('two');
// 7


// ====================================================================================================================
// Array.join([separator = ','])
// The join() method joins all elements of an array into a string.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
// ====================================================================================================================
['one', 'two', 'three'].join('|-|');
// one|-|two|-|three


// ====================================================================================================================
// Array.pop()
// The pop() method removes the last element from an array and returns that element.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
// ====================================================================================================================
var arr = ['one', 'two', 'three'];
var pop = arr.pop();
// console.log(arr); // ["one", "two"]
// console.log(pop); // three


// ====================================================================================================================
// Array.push(element1, ..., elementN)
// The push() method adds one or more elements to the end of an array and returns the new length of the array.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
// ====================================================================================================================
var arr = ['one', 'two', 'three'];
arr.push('four', 'five', 'six');
// console.log(arr); // ["one", "two", "three", "four", "five", "six"]


// ====================================================================================================================
// Array.reduce(callback[, initialValue])
// The reduce() method applies a function against an accumulator and each value of the array (from left-to-right)
// has to reduce it to a single value.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// ====================================================================================================================
[0, 1, 2, 3, 4].reduce((previousValue, currentValue, index, array)=> {
	return previousValue + currentValue;
});
// 10


// ====================================================================================================================
// Array.reverse()
// The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
// ====================================================================================================================
['one', 'two', 'three'].reverse();
// ["three", "two", "one"]


// ====================================================================================================================
// Array.shift()
// The shift() method removes the first element from an array and returns that element.
// This method changes the length of the array.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
// ====================================================================================================================
var arr = ['one', 'two', 'three'];
var shifted = arr.shift();
// console.log(arr); 		// ["two", "three"]
// console.log(shifted); 	// one


// ====================================================================================================================
// Array.slice([begin[, end]])
// The slice() method returns a shallow copy of a portion of an array into a new array object.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// ====================================================================================================================
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1, 3);
// console.log(citrus); 	// ["Orange", "Lemon"]


// ====================================================================================================================
// Array.some(callback[, thisArg])
// The some() method tests whether some element in the array passes the test implemented by the provided function.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// ====================================================================================================================
var r = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'].some((i)=> {
	return i=='Lemon';
});
// console.log(r); // true

var r = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'].some((i)=> {
	return i=='Snickers';
});
// console.log(r); // false


// ====================================================================================================================
// Array.sort([compareFunction])
// The sort() method sorts the elements of an array in place and returns the array.
// The sort is not necessarily *stable. The default sort order is according to string Unicode code points.
// * https://en.wikipedia.org/wiki/Sorting_algorithm#Stability
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// ====================================================================================================================
['lemon', 'orange', 'banana', 'apple'].sort();
// ["apple", "banana", "lemon", "orange"]

[1, 2, 10, 21].sort();
// [1, 10, 2, 21]

['word', 'Word', '1 Word', '2 Words'].sort();
// ['1 Word', '2 Words', 'Word', 'word']

['Orange1', 'orange2', 'Orange3', 'orange20'].sort();
// ["Orange1", "Orange3", "orange2", "orange20"]


// ====================================================================================================================
// Array.splice(index, howMany[, element1[, ...[, elementN]]])
// The splice() method changes the content of an array, adding new elements while removing old elements.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// ====================================================================================================================
var arr = ['lemon', 'orange', 'banana', 'apple'];
arr.splice(2, 0, 'Mars'); // removes 0 elements from index 2, and inserts 'Mars'
// ["lemon", "orange", "Mars", "banana", "apple"]

var arr = ['lemon', 'orange', 'banana', 'apple'];
arr.splice(3, 1, 'Mars'); // removes 1 element from index 3, and inserts 'Mars'
// ["lemon", "orange", "banana", "Mars"]


// ====================================================================================================================
// Array.unshift([element1[, ...[, elementN]]])
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
// ====================================================================================================================
var arr = ['lemon', 'orange', 'banana', 'apple'];
arr.unshift('Snickers', 'Mars');
// ["Snickers", "Mars", "lemon", "orange", "banana", "apple"]
