const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

// function mergeArray(arr1, arr2) {
// 	return [...arr1, ...arr2].sort((a, b) => a - b);
// }

function mergeArray(arr1, arr2) {
	var i = 0,
		j = 0,
		k = 0;
	let res = [];
	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			res[k] = arr1[i];
			i++;
			k++;
		} else {
			res[k] = arr2[j];
			j++;
			k++;
		}
	}
	while (i < arr1.length) {
		res[k] = arr1[i];
		i++;
		k++;
	}
	while (j < arr2.length) {
		res[k] = arr2[j];
		j++;
		k++;
	}
	return res;
}

console.log(mergeArray(arr1, arr2));
