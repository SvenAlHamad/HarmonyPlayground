// in harmony we have classes
// Array is a class
// we can extend classes :)

class MyArray extends Array {

}
var myArr = MyArray.from(['one', 'two', 'three']);
myArr.reverse();
// ["three", "two", "one"]

class MySuperArray extends Array {
	addACoolItem() {
		this.push('cool item');
	}

	getArrVals(){
		return Array.from(this);
	}

}
var myArr = MySuperArray.from(['one', 'two', 'three']);
myArr.addACoolItem();
myArr.addACoolItem();
myArr.addACoolItem();
// console.log(myArr.getArrVals());
// ["one", "two", "three", "cool item", "cool item", "cool item"]