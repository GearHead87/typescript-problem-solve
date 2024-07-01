const logString = (param: unknown): string => {
	if (typeof param === "string") {
		return param;
	} else {
		throw new Error('Input is not a string.');
	}
};

// Sample Input 1:
console.log(logString('Hello, TypeScript!'))


// Sample Output 1:
// "Hello, TypeScript!"

// Sample Input 2:
// console.log(logString(42));

// Output: Error:
// Input is not a string.
