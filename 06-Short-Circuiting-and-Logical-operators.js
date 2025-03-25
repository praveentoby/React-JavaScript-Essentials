import data from './data.json';

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const book = getBook(1);
const { title, author, pages, publicationDate, hasMovieAdaptation } = book;

const AF_getYear = (str) => new Date(str).getFullYear();

console.log('getYear() :>> ', AF_getYear(publicationDate));

console.log(
  '=========================SHORT CIRCUIT && ============================='
);
/* ************ Short Circuit Operator &&  ************ */
// Short Circuit Operator (&&) is a logical operator that returns its right-hand side operand when its left-hand side operand is truthy, and otherwise returns its left-hand side operand.
console.log('Short Circuite && :>> ', true && 'Some value');

console.log('Short Circuite  && :>> ', false && 'Some value');

console.log('Short Circuite && :>> ', hasMovieAdaptation && 'This is a Movie');

console.log(
  '=========================SHORT CIRCUIT || ============================='
);
/* ************ Short Circuit Operator ************ */
// Short Circuit Operator (||) is a logical operator that returns its right-hand side operand when its left-hand side operand is falsy, and otherwise returns its left-hand side operand.
console.log('Short Circuite || :>> ', true || 'Some value');

console.log('Short Circuite  || :>> ', false || 'Some value');

console.log('Short Circuite || :>> ', hasMovieAdaptation && 'This is a Movie');

const spanishTranslation = book.translations.spanish || 'Not Translated';

console.log('spanishTranslation :>> ', spanishTranslation);

const germanTranslation = book.translations.german || 'Not Translated';

console.log('germanTranslation :>> ', germanTranslation);

console.log(
  '=========================Nullish Coalescing ?? ============================='
);

/* ************ Nullish Coalescing Operator ************ */
// Nullish Coalescing Operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
console.log(
  'No Coalescing Operator :>> ',
  book.reviews.librarything.reviewsCount ?? 'No data'
);

console.log(
  'No Coalescing Operator :>> ',
  book.reviews.librarything.xxxxxxxxx > 10 ?? 'No data'
);
