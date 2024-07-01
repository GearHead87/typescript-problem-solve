const filterEvenNumbers = (nums: number[]): number[] => {
	let evenNums: number[] = [];
	nums.map((n) => {
		if (n % 2 === 0) evenNums.push(n);
	});
    return evenNums
};

console.log(filterEvenNumbers([2]));