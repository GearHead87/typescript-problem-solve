const reverseArray = <T>(arr: T[]) => {
	let revArr: T[] = [];

	// using user method
	// for (let i = arr.length - 1; i >= 0; i--) {
	// 	revArr.push(arr[i]);
	// }
	// return revArr;

	// user buildin function
	return arr.reverse();
};

console.log(reverseArray([1, 2, 4, 4]));
