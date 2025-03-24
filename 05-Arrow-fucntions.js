import data from './data.json';

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const book = getBook(2);

const { title, author, pages, publicationDate, genres } = book;

function getYear(str) {
  return new Date(str).getFullYear();
}
console.log('getYear() :>> ', getYear(publicationDate));

/* Arrow functions 
1. Remove the function keyword
2. Remove the curly braces
3. Remove the return keyword
4. Arrow goes between the parentheses and the curly braces

-->> so, finally Arrow function is a shorter way to write a function and it is more concise.
-->> it can be also one line of code and use it in a single line of code.
-->> or it can be a multi-line of code and use it in a multi-line of code.
-->> assign it to a variable and use it as a function wherever you want.
*/
const AF_getYear = (str) => new Date(str).getFullYear();

console.log('getYear() :>> ', getYear(publicationDate));
