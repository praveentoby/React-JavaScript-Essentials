import data from './data.json';

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const book = getBook(1);

const { genres } = book;

console.log('genres :>> ', genres);

// REST operator =============================
const [primaryGenre, secondaryGenre, ...othergenre] = genres;

console.log('primaryGenre :>> ', primaryGenre);
console.log('secondaryGenre :>> ', secondaryGenre);

console.log('othergenre :>> ', othergenre);

const newGenre = [genres, 'Edpi Fantasy'];

console.log('newGenre :>> ', newGenre);

// SPREAD operator ============ IN Arrays =================
const newGenreSpreadOperator = [...genres, 'Edpi Fantasy'];

console.log('newGenreSpreadOperator :>> ', newGenreSpreadOperator);

// SPREAD operator ============ IN Objects =================
const updatedBook = {
  ...book,
  moviePublicationDate: '2001-01-01',
};

console.log('updatedBook :>> ', updatedBook);

const updatedBook2 = {
  title: 'LOTR',
  ...book, // NOTE: This will override the title from the book
};

const updatedBook3 = {
  ...book,
  title: 'LOTR', // NOTE: This will override the title from the book
};

console.log('updatedBook3 :>> ', updatedBook3);
