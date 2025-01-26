/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
	let count = 0;
	let maxOne = 0;

	for (let i = 0; i < nums.length; i++) {
		// if value is one increase count by 1
		if (nums[i] == 1) {
			count += 1;
		} else {
			// calculate max of count and maxOne
			maxOne = Math.max(count, maxOne);
			// if value is 0 then reassign count to 0
			count = 0;
		}
	}

	return Math.max(count, maxOne);
};

console.log(findMaxConsecutiveOnes([1, 1, 1, 1, 0, 0, 0, 1, 1, 1]));
