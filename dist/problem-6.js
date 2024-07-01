"use strict";
// Sample Input :
const book1 = {
    title: 'Sample Book',
    author: 'John Doe',
    publishedYear: 2018,
};
const isRecentBook = (obj) => {
    const currentYear = new Date().getFullYear();
    if (currentYear - book1.publishedYear <= 5) {
        return true;
    }
    else {
        return false;
    }
};
console.log(isRecentBook(book1));
// isRecentBook(book1);
// Sample Output:
true;
