const arr = [1, 3, 9, 4, 8, 5, 7, 2, 6];
k = 3;
const kthSmallest = (arr) => {
	return arr.sort()[k - 1];
};

console.log(kthSmallest(arr));

const kthLargest = (arr) => {
	return arr.sort()[arr.length - k];
};

console.log(kthLargest(arr));
