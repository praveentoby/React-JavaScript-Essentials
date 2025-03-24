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

/* Arrow functions.
0. Also called funciton expressions.
1. Remove the function keyword
2. Remove the curly braces, so that it returns the result automatically, 
3. if its miltiline, then wrap it up with curly braces and explicitly return th resukt return keyword
4. Remove the return keyword
5. Arrow goes between the parentheses and the curly braces

-->> so, finally Arrow function is a shorter way to write a function and it is more concise.
-->> it can be also one line of code and use it in a single line of code.
-->> or it can be a multi-line of code and use it in a multi-line of code.
-->> assign it to a variable and use it as a function wherever you want.
*/
const AF_getYear = (str) => new Date(str).getFullYear();

console.log('getYear() :>> ', getYear(publicationDate));
