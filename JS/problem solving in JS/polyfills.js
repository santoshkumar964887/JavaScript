function printFullname() {
	console.log(this.firstname + " " + this.lastname);
}

let name1 = {
	firstname: "rakhi",
	lastname: "mishra",
	printFullname: printFullname,
};

// call method
printFullname.call(name1);

// polyfill for call method

Function.prototype.customCall = function (obj, ...args) {
	obj.fnRef = this;
	return obj.fnRef(...args);
};

console.log(printFullname.customCall(name1), "custom call method");

// bind method
const fullname = printFullname.bind(name1);
fullname();

// polyfill for bind method

Function.prototype.myBind = function (...args) {
	const obj = this;
	const params = args.slice(1);
	return function (...arguments) {
		obj.apply(args[0], [...params, ...arguments]);
	};
};

const fullname1 = printFullname.myBind(name1);
fullname1();

// reduce
const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, curr) => {
	return acc + curr;
}, 0);

console.log(sum);

//map method

const mappedArray = nums.map((num, i, nums) => {
	return num * 2;
});

console.log(mappedArray, "mappedArray");

//polyfill for map method

// map method first takes a callback as a arguments and return a totally new array
Array.prototype.myMap = function (cb) {
	let newArray = [];
	for (let i = 0; i < this.length; i++) {
		newArray.push(cb(this[i], i, this));
	}
	return newArray;
};

const mappedArray1 = nums.myMap((num, i, nums) => {
	return num * 2;
});

console.log(mappedArray1, "mappedArray");

// filter method

let data = [2, 3, 4, 5, 6, 2, 3, 3, 4, 6, 7, 8, 9];

//filter only greater than 2

const greaterThanTwo = data.filter((item, i) => {
	return item > 2;
});

console.log(greaterThanTwo, "greaterThanTwo");

// polyfill for filter method

Array.prototype.myFilter = function (cb) {
	let temp = [];
	for (let i = 0; i < this.length; i++) {
		// if callback satisfy the condition then only push to the array
		if (cb(this[i], i, this)) {
			temp.push(this[i]);
		}
	}
	return temp;
};

const greaterThanTwo1 = data.myFilter((item, i) => {
	return item > 2;
});

console.log(greaterThanTwo1, "greaterThanTwo1");

// reduce method

const sumOfNumbers = data.reduce((acc, curr, i) => {
	return acc + curr;
}, 0);

console.log(sumOfNumbers, "sumOfNumbers with reduce method");

//polyfill for reduce method

Array.prototype.myReduce = function (cb, initialValue) {
	var accumulator = initialValue;
	for (let i = 0; i < this.length; i++) {
		accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
	}
	return accumulator;
};

const sumOfNumbersWithMyReduceMethod = data.myReduce((acc, curr, i) => {
	return acc + curr;
}, 0);

console.log(
	sumOfNumbersWithMyReduceMethod,
	"sumOfNumbers With MyReduce Method"
);
