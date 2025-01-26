const arr = [5, 5, 8, 9, 2, 6, 8, 9, 2];

function printUnique(arr) {
	let el = 0;
	for (let i of arr) {
		el = el ^ i;
	}
	console.log(el);
}

printUnique(arr);

// function printUnique(arr) {
// 	let obj = {};
// 	for (let i of arr) {
// 		if (obj[i]) {
// 			obj[i] += 1;
// 		} else {
// 			obj[i] = 1;
// 		}
// 	}
// 	//for unique element in the array
// 	for (let i in obj) {
// 		if (obj[i] == 1) {
// 			return i;
// 			break;
// 		}
// 	}
// 	// for most frequent item in the array
// 	// return Math.max.apply(null, Object.values(obj));
// }

// console.log(printUnique([1, 2, 3, 1, 1, 1, 1]));
