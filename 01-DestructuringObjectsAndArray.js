import * as data from  './data.json';

function getBooks() {
    return data;
}

function getBook(id) {
    return data.find((d) => d.id === id)
}

const books = getBook();

console.log("Books : ", books)