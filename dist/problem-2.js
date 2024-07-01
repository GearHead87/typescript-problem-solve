"use strict";
const findLargestNumber = (num) => {
    const largestNumber = Math.max(...num);
    console.log(largestNumber);
};
findLargestNumber([1, 2, 5, 2, 10]);
