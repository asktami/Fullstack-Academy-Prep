// ### Greeting

// Define a function `greeting` that accepts an optional string argument called
// name. `greeting` should return a personalized string if the name is present.

// ```javascript
// greeting('Sadie'); // => Hello Sadie!
// greeting(); // => Hello!

// YOUR CODE BELOW
// ALTERNATIVE:
// const greeting = (name = '') => {
//   if (name != '') {
//     return 'Hello ' + name + '!';
//   } else {
//     return 'Hello!';
//   }
// };

// ALTERNATIVE:
// const greeting = (name) => {
//   if (typeof name === 'string' && name.length > 0) {
//     return `Hello ${name}!`;
//   } else {
//     return 'Hello!';
//   }
// };

// ALTERNATIVE:
// const greeting = name => {
//   if (name) {
//     return `Hello ${name}!`;
//   } else {
//     return 'Hello!';
//   }
// };

// ALTERNATIVE:
// const greeting = name => {
//   // Ternary
//   // if someCondition ? true return : false return ;
//   return name ? `Hello ${name}!` : 'Hello!';
// };

// FINAL:
// We can return implicitly with E6 arrow functions when we don't use curly braces for the function body
const greeting = name => (name ? `Hello ${name}!` : 'Hello!');

console.log(greeting('Sadie'));
console.log(greeting());
