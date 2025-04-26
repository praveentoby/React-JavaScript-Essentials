const data = require('./data.json');

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const book = getBook(2);
const { title, author, pages, publicationDate, hasMovieAdaptation } = book;

/**
 * Reduce Array Method is used to reduce an array to a single value.
 * The reduce method takes a callback function as an argument.
 * The callback function takes two arguments: the accumulator and the current value.
 * The accumulator is the value that is returned from the previous iteration.
 * The current value is the value of the current element in the array.
 * The reduce method also takes an optional initial value as the second argument.
 */

// EXAMPLE 1

console.log(
  'Reduce Method Example 1 :>> ',
  [1, 2, 3, 4, 5].reduce((acc, n) => acc + n),
  '\n'
);

/*
 * To explain the above example, the reduce method takes an array of numbers and returns the sum of all the numbers in the array.
 * in the first iteration, the accumulator is 1 and the current value is 2. The sum is 3.
 * in the second iteration, the accumulator is 3 and the current value is 3. The sum is 6.
 * in the third iteration, the accumulator is 6 and the current value is 4. The sum is 10.
 * in the fourth iteration, the accumulator is 10 and the current value is 5. The sum is 15.
 * The reduce method returns the final value of the accumulator, which is 15.
 * we dont have to mention when the array is reached the end, the reduce method will automatically stop when the array is reached the end.
 */
