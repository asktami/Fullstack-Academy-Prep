// ### Last Character

// Define a function `lastCharacter` that accepts two strings as arguments.
// `lastCharacter` should return true if both strings end with the same character.
// Otherwise, `lastCharacter` should return false.

// ```javascript
// lastCharacter('apples', 'pumpkins'); // => true
// lastCharacter('marker', 'pen'); // => false

// YOUR CODE BELOW
// length <> index because index starts at 0
const lastCharacter = (a, b) => {
  if (a[a.length - 1] === b[b.length - 1]) {
    return true;
  } else {
    return false;
  }
};

console.log('last character');
console.log(lastCharacter('apples', 'pumpkins'));
console.log(lastCharacter('marker', 'pen'));
