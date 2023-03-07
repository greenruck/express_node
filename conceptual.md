### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
callbacks, promises, async/await
- What is a Promise?
Promises allow you to chain methods together and ease error handling. They allow for better flowing code by representing the evntual completion of a function/operation
- What are the differences between an async function and a regular function?
Async functions always return a promise
- What is the difference between Node.js and Express.js?
Node is server-side while express builds web-applications based of node principles
- What is the error-first callback pattern?
First returns an error object or then any successful data returned by the function
- What is middleware?
Middleware can make for fater and more efficeinet communication within the app. It has access to teh req, res and is able to move to teh next function
- What does the `next` function do?
runs the code below and keeps the app from stopping after a return
- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
repetitive, slow in having to fetch each user, does not get user-it defines them
```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
