// ### Do You Play the Theremin

// Define a function `doYouPlayTheTheremin` that accepts a string as an argument.
// `doYouPlayTheTheremin` should return true if the inputted string starts with the
// letters `s` or `S`. Otherwise, `doYouPlayTheTheremin` should return false.

// ```javascript
// doYouPlayTheTheremin('Griffin'); // => false
// doYouPlayTheTheremin('Scott'); // => true

// YOUR CODE BELOW
// Bracket Notation
// Is when use  brackets [] to access an index or key value of any sort of string, array, or object.
// Use brackets [] to access zero index of the string
const doYouPlayTheTheremin = aStr => {
  if (aStr[0].toLowerCase() === 's') {
    return true;
  } else {
    return false;
  }
};
console.log(doYouPlayTheTheremin('Griffin'));
console.log(doYouPlayTheTheremin('Scott'));
