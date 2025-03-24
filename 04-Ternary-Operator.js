import data from './data.json';

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const book = getBook(2);

const { title, author, pages, publicationDate, genres } = book;

const pagesRanges = pages > 500 ? 'Long' : 'Short';

console.log('pagesRanges :>> ', pagesRanges);

const summary = `${title} by ${author} has ${pages} pages is a ${pagesRanges} book. It was published on ${publicationDate}. The genres are ${genres.join(
  ', '
)}.`;

console.log('summary :>> ', summary);
