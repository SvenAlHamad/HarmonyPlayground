Promises Demo
===============

This demo is about the `Promise` feature in Javascript Harmony.

# Demo
```js
// ====================================================================================================================
// Promise
// The Promise object is used for deferred and asynchronous computations. A Promise is in one of the three states:
// 	- pending: initial state, not fulfilled or rejected.
// 	- fulfilled: successful operation
// 	- rejected: failed operation.
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise
// ====================================================================================================================

// simple demo
function simplePromise() {
	return new Promise((resolve)=> {
		setTimeout(resolve, 2000);
	});
}

simplePromise().then(()=> {
	console.log('Promise resolved');
});

// ajax request
// https://github.com/mdn/promises-test/blob/gh-pages/index.html
function loadImage(url) {
	return new Promise((resolve, reject)=> {
		var request = new XMLHttpRequest();
		request.open('GET', url);
		request.responseType = 'blob';

		request.onload = function () {
			if (request.status == 200) {	// success
				resolve(request.response);
			} else {						// error
				reject(Error('Image didn\'t load successfully; error code:' + request.statusText));
			}
		};

		// Also deal with the case when the entire request fails to begin with
		// This is probably a network error, so reject the promise with an appropriate message
		request.onerror = function () {
			reject(Error('There was a network error.'));
		};

		request.send();
	});
}

var imgHolder = document.querySelector('#loadImage');
var myImage = new Image();
loadImage('http://www.8cn.tv/sites/default/files/styles/500x262/public/lego-yoda.jpg').then((response)=> {
	var imageURL = window.URL.createObjectURL(response);
	myImage.src = imageURL;
	imgHolder.appendChild(myImage);
}, (Error)=> {
	console.log(Error);
});


// ====================================================================================================================
// Promise.all
// The Promise.all(iterable) method returns a promise that resolves when all of the promises in the
// iterable argument have resolved.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
// ====================================================================================================================
Promise.all([simplePromise(), loadImage('http://www.8cn.tv/sites/default/files/styles/500x262/public/lego-yoda.jpg')]).then((values)=> {
	console.log('Chain promise resolved');
});


// ====================================================================================================================
// Promise.race
// The Promise.race(iterable) method returns a promise that resolves or rejects as soon as one of the
// promises in the iterable resolves or rejects, with the value or reason from that promise.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race
// ====================================================================================================================

var p1 = new Promise((resolve)=> {
	setTimeout(resolve, 1000, "one");
});

var p2 = new Promise((resolve)=> {
	setTimeout(resolve, 500, "two");
});

var p3 = new Promise((resolve)=> {
	setTimeout(resolve, 800, "three");
});

Promise.race([p1, p2, p3]).then((value)=> {
	console.log(value); // "two"
	// they all resolve, but p2 is the fastest
});

var p4 = new Promise((resolve, reject)=> {
	setTimeout(reject, 200, "four");
});

Promise.race([p1, p2, p3, p4]).then((value)=> {
	// this is never triggered because the p4 is the fastest and it rejects the promise
}, (Error)=> {
	console.log(Error); // "four"
});


// ====================================================================================================================
// Promise.resolve
// The Promise.resolve(value) method returns a Promise object that is resolved with the given value.
// If the value is a thenable (i.e. has a then method), the returned promise will "follow" that thenable,
// adopting its eventual state; otherwise the returned promise will be fulfilled with the value.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
// ====================================================================================================================

// resolving a promise
Promise.resolve(p1).then((val)=> {
	console.log('p1 resolved');
});

// resolving a thenable
var thenable = {
	then: (resolve)=> {
		resolve('some return val');
	}
};

Promise.resolve(thenable).then((val)=> {
	console.log('thenable resolved: ' + val);
});

// thenable error
var thenableWithError = {
	then: (resolve)=> {
		throw new Error('This is an error');
	}
};
Promise.resolve(thenableWithError).then((val)=> {
	// not called
}, (Error)=> {
	console.log('we have an error: ' + Error.message);
});


// ====================================================================================================================
// Promise.catch
// The catch() method returns a Promise and deals with rejected cases only.
// It behaves the same as calling Promise.then(undefined, onRejected).
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch
// ====================================================================================================================
var fooPromise = new Promise((resolve, reject)=> {
	resolve("Success");
});

fooPromise.then((value)=> {
	console.log(value); // "Success!"
	throw "oh, no!";
}).catch((e)=> {
	console.log(e); // "oh, no!"
});


// ====================================================================================================================
// Promise.then
// The then() method returns a Promise. It takes two arguments, both are callback
// functions for the success and failure cases of the Promise.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
// ====================================================================================================================

var barPromise = new Promise((resolve, reject)=>{
	resolve(1);
});

// `then` always returns a Promise, so you easily chain them
barPromise.then((value)=>{
	console.log(value); // 1
	return value + 1; // this is a Promise
}).then((value)=>{
	console.log(value); // 2
	return value + 1; // this is another Promise
}).then((value)=>{
	console.log(value); // 3
});
```