const data = require('./data.json');

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const book = getBook(2);
const { title, author, pages, publicationDate, hasMovieAdaptation } = book;

// Working with Immutable Arrays, we have three methods to work with immutable arrays:
// Add an element to an array using the spread operator
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log('Original numbers:', numbers); // [1, 2, 3]
console.log('New numbers:', newNumbers); // [1, 2, 3, 4]

// Add/Update an element to an array using the map() method
const numbers2 = [1, 2, 3];
const updatedNumbers = numbers2.map((num) => (num === 2 ? 4 : num));
console.log('Original numbers:', numbers2); // [1, 2, 3]
console.log('Updated numbers:', updatedNumbers); // [1, 4, 3]

// Delete an element from an array using the filter() method
const numbers3 = [1, 2, 3];
const filteredNumbers = numbers3.filter((num) => num !== 2);
console.log('Original numbers:', numbers3); // [1, 2, 3]
console.log('Filtered numbers:', filteredNumbers); // [1, 3]
