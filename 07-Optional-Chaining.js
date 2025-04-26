import data from './data.json';

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const book = getBook(2);
const { title, author, pages, publicationDate, hasMovieAdaptation } = book;

function getTotalReviewCount(book) {
  const goodRead = book.reviews.goodreads.reviewsCount;
  const libraryThing = book.reviews.librarything.reviewsCount;
  return goodRead + libraryThing;
}

console.log('getTotalReviewCount :>> ', getTotalReviewCount(book));
