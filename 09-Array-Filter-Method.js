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
 * An Array FIlter method will filter out the elements of an array that do not match the condition passed to it.
 * The filter method returns a new array with the elements that match the condition.
 * The filter method does not modify the original array.
 * The filter method is a higher-order function that takes a callback function as an argument.
 */

// EXAMPLE 1

console.log(
  [1, 2, 3, 4, 5].filter((n) => n > 2),
  '\n'
); // [3, 4, 5]

// EXAMPLE 2
const books = getBooks();
const bookWithPagesLongerThan1000 = books.filter((book) => book.pages > 1000);
console.log('bookWithPagesLongerThan1000 :>> ', bookWithPagesLongerThan1000);

// EXAMPLE 3
const booksWithMovieAdaptation = books.filter(
  (book) => book.hasMovieAdaptation
);
console.log('booksWithMovieAdaptation :>> ', booksWithMovieAdaptation);

// EXAMPLE 4

const booksWithPagesLessThan500 = books.filter((book) => book.pages < 500);
console.log('booksWithPagesLessThan500 :>> ', booksWithPagesLessThan500.length);

// EXAMPLE 5
// this is called chaining
const BooksLessThan500PagesWithMovieAdaptation = books
  .filter((book) => book.pages < 500)
  .filter((book) => book.hasMovieAdaptation);
console.log(
  'BooksLessThan500PagesWithMovieAdaptation :>> ',
  BooksLessThan500PagesWithMovieAdaptation
);
