type Book = {
	title: string;
	author: string;
	publishedYear: number;
};

// Sample Input :
const book1: Book = {
	title: 'Sample Book',
	author: 'John Doe',
	publishedYear: 2018,
};

const isRecentBook = (obj: Book) => {
	const currentYear = new Date().getFullYear();
	if (currentYear - book1.publishedYear <= 5) {
		return true;
	} else {
		return false;
	}
};
console.log(isRecentBook(book1));
// isRecentBook(book1);

// Sample Output:
true;
