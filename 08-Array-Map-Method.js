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
 * An Array Map will return a new array with the same number of elements as the original array,
 * but with the values transformed by the function passed to it.
 * The map method does not modify the original array.
 * The map method is a higher-order function that takes a callback function as an argument.
 * The callback function is called for each element in the array, and the return value of the callback function is added to the new array.
 */

// EXAMPLE 1
console.log(
  [1, 2, 3].map((n) => n * 2),
  '\n'
); // [2, 4, 6]

// EXAMPLE 2
const books = getBooks();
const bookTitles = books.map((book) => book.title); // ['Book 1', 'Book 2', 'Book 3']
console.log('bookTitles :>> ', bookTitles);

// EXAMPLE 3
const bookAuthors = books.map((book) => book.author); // ['Author 1', 'Author 2', 'Author 3']
console.log('bookAuthors :>> ', bookAuthors);

// EXAMPLE 4

console.log(
  'With {} and No Return Keyword Will Not Work )',
  ['praveen', 'sai', 'kiran'].map((name) => {
    name + ' Kumar';
  })
); // WILL NOT WORK
// The above code will not work because the function does not return anything.

console.log(
  ' Without {} will work even without return keyword',
  ['praveen', 'sai', 'kiran'].map((name) => name + ' Kumar')
);
//Will WORK
// The above code will work because the function returns the value.

// EXAMPLE 5
// But to avoid using the return keyword, we can enclose the function body in parentheses.
console.log(
  'With () and No Return Keyword Will Work',
  ['praveen', 'sai', 'kiran'].map((name) => name + ' Kumar')
); // WILL WORK
// The above code will work because the function returns the value.
// The parentheses are used to group the expression, and the value of the expression is returned.
