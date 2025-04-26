const data = require('./data.json');

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const book = getBook(2);
const { title, author, pages, publicationDate, hasMovieAdaptation } = book;

/**
 * The sort() method sorts the elements of an array in place and returns the sorted array.
 * The compare function takes two arguments and returns:
 * - A negative value if the first argument is less than the second argument
 * - A positive value if the first argument is greater than the second argument
 * - 0 if they are equal
 * The sort() method is case-sensitive, meaning that uppercase letters are sorted before lowercase letters.
 * The sort() method is locale-sensitive, meaning that the order of elements may vary depending on the locale.
 * The sort() do mutate the original array.
 */

// Example 1: Sort an array of numbers in ascending order
const numbers = [5, 3, 8, 1, 2];
const ascSortedNumbers = numbers.sort((a, b) => a - b);
console.log('Ascending Sorted Numbers:', ascSortedNumbers); // [1, 2, 3, 5, 8]

// Example 2: Sort an array of numbers in ascending order
const descSortedNumbers = numbers.sort((a, b) => b - a);
console.log('Descending Sorted Numbers:', descSortedNumbers); // [1, 2, 3, 5, 8]

// Example 2: Sort an array of strings in alphabetical order

const strings = ['banana', 'apple', 'orange', 'grape'];
const sortedStrings = strings.sort((a, b) => a.localeCompare(b));
console.log('Sorted Strings:', sortedStrings); // ['apple', 'banana', 'grape', 'orange']

// Example 3: sort() is mutating the original arraym, to prevent this, we can use the slice() method to create a shallow copy of the array before sorting it.
const sortedNumbersCopy = numbers.slice().sort((a, b) => a - b);
console.log('Original numbers:', numbers); // ['apple', 'banana', 'grape', 'orange']
console.log('Sorted numbers:', sortedNumbersCopy); // [1, 2, 3, 5, 8]

// EXAMPLE 4: Sort an array of objects by a property
const books = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  { title: '1984', author: 'George Orwell', year: 1949 },
];
const sortedBooks = books.sort((a, b) => a.year - b.year);
console.log('Sorted Books:', sortedBooks);
