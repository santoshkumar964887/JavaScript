const array = [[[1, 2], 3, 4], 5, 6, 7];
let result = [];
function flatten(array) {
	for (let i of array) {
		if (Array.isArray(i)) {
			flatten(i);
		} else {
			result.push(i);
		}
	}
	return result;
}

console.log(flatten(array));

const arr1 = [[[[1, 8, 9], 2], 3], 4, 5, 6, [10, 11, 12]];

// function flatten(arr) {
// 	var res = [];
// 	for (let i of arr) {
// 		if (typeof i == "number") {
// 			res.push(i);
// 		} else {
// 			res = [...res, ...flatten(i)];
// 		}
// 	}
// 	return res;
// }
// console.log(flatten(arr1));
