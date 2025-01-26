/**
 * @param {number[]} nums
 * @return {number}
 */
const arr = [5, 5, 8, 9, 2, 6, 8, 9, 2];
let k = 2; // repeats 2 time
var singleNumber = function (nums) {
	let ans = 0;
	for (let j = 0; j < 32; j++) {
		let c = 0;
		for (let i = 0; i < nums.length; i++) {
			if ((nums[i] >> j) & (1 == 1)) {
				c++;
			}
		}
		if (c % k == 1) {
			ans = ans | (2 ** j);
		}
	}
	return ans;
};

console.log(singleNumber(arr));
