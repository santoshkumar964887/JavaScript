const a = [-7, 1, 5, 2, -4, 3, 0];

function equillibriumIndex(a) {
	for (let i = 0; i < a.length; ++i) {
		let leftSum = 0;
		for (let j = 0; j < i; j++) {
			leftSum += a[j];
		}
		let rightSum = 0;
		for (let j = i + 1; j < a.length; j++) {
			rightSum += a[j];
		}
		if (leftSum == rightSum) {
			return i;
		}
	}
	return -1;
}

console.log(equillibriumIndex(a));
