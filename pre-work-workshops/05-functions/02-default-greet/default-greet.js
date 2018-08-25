// ### Default Greet

// Define a function, `defaultGreet`, that takes a first and a last name.
// `defaultGreet` should return a string greeting for the given names. If the user
// does not define a last name, assume the last name is 'Doe'.

// defaultGreet('Chaka', 'Khan'); // => 'Hi Chaka Khan!'
// defaultGreet('John'); // => 'Hi John Doe!'

// YOUR CODE BELOW
// ALTERNATIVE:
// function defaultGreet(first, last = 'Doe') {
//   return 'Hi ' + first + ' ' + last + '!';
// }

// ALTERNATIVE:
// const defaultGreet = (first, last = 'Doe') => {
//   return 'Hi ' + first + ' ' + last + '!';
//   return
// };

// ALTERNATIVE:
// const defaultGreet = (first, last = 'Doe') => {
//   return `Hi ${first} ${last}!`;
// };

// FINAL:
const defaultGreet = (first, last = 'Doe') => `Hi ${first} ${last}!`;

console.log(defaultGreet('Chaka', 'Khan'));
console.log(defaultGreet('John'));
