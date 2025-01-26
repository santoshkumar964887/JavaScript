const arr1 = [2, 5, 3, 1, 6, 8, 7];
var el = 0;
for (let i = 0; i <= arr1.length; i++) {
	el = el ^ arr1[i] ^ (i + 1);
}
console.log(el);
