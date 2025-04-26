const result = fetch('https://jsonplaceholder.typicode.com/posts');
console.log('result :>> ', result); // you query the API, but you get a promise
// result is a promise, not the actual data
// you need to wait for the promise to resolve
// to get the actual data
// you can use .then() to wait for the promise to resolve
result
  .then((response) => {
    console.log(
      'response =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-:>> \n',
      response
    ); // you get the response object
    return response.json(); // you need to parse the response to get the actual data
  })
  .then((data) => {
    console.log('data :>> ', data); // you get the actual data
  })
  .catch((error) => {
    console.log('error :>> ', error); // you catch any errors
  });
