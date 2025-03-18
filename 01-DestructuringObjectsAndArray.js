import data from './data.json';

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const book = getBook(2);

// const title = book.title;
// const author = book.author;

const { title, author, pages, publicationDate, genres } = book;

console.log('title :>> ', title);
console.log('author :>> ', author);
console.log('pages :>> ', pages);
console.log('publicationDate :>> ', publicationDate);

console.log('genres :>> ', genres);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

const [primaryGenre, secondaryGenre] = genres;

console.log('primaryGenre :>> ', primaryGenre);
console.log('secondaryGenre :>> ', secondaryGenre);
