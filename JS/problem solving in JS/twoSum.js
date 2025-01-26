/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const arr = [2, 3, 4, 9, 6, 7];
target = 13;
var twoSum = function (nums, target) {
	for (let i = 0; i < nums.length; i++) {
		if (
			i !== nums.indexOf(target - nums[i]) &&
			nums.indexOf(target - nums[i]) !== -1
		) {
			return [i, nums.indexOf(target - nums[i])];
		}
	}

	// let obj = {};

	// for (let i = 0; i < nums.length; i++) {
	// 	obj[nums[i]] = i;
	// }

	// for (let i = 0; i < nums.length; i++) {
	// 	if (obj[target - nums[i]] && i !== obj[target - nums[i]]) {
	// 		return [i, obj[target - nums[i]]];
	// 	}
	// }
};

console.log(twoSum(arr, target));
