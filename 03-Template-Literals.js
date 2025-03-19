import data from './data.json';

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const book = getBook(2);

const { title, author, pages, publicationDate, genres } = book;

// Template literals are enclosed by the back-tick (` `) (grave accent) character instead of double or single quotes.
// Template literals can contain placeholders. These are indicated by the dollar sign and curly braces (${expression}).
// The expressions in the placeholders and the text between the back-ticks (` `) get passed to a function.
// The default function just concatenates the parts into a single string.
// The expressions inside the placeholders are evaluated and the result is inserted into the string.
// Template literals can contain multiple placeholders.
// The placeholders can be replaced with any valid expression.  For example, you can use arithmetic operations, function calls, or even object properties.
// Template literals can be used for multiline strings.
// Template literals can contain tagged expressions. A tagged template literal enables you to parse template literals with a function.
// The function receives an array of string values and expressions. The function can then return the final string.
const summary = `
  Title: ${title},
  Book Author: ${author},
  Pages: ${pages},
  Publication Date: ${publicationDate},
  Genres: ${genres.join(', ')}
`;

console.log('summary :>> ', summary);
