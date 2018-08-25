// ### Just in Camel Case

// The code in just-in-camel-case.js also works! But it it looks like the well-
// meaning developer who wrote it didn't use camel case when defining the
// variables!

// Fix this, but don't forget to make sure all of the tests are still
// passing when you're done.

// YOUR CODE BELOW
function justInCamelCase(underName) {
  let camelCaseOutput = '';
  let foundUnder = false;

  for(let i = 0; i < underName.length; i++) {
      if (foundUnder[i] === '_') {
        foundUnder = true;
      } else if (foundUnder) {
        camelCaseOutput += underName[i].toUpperCase();
        foundUnder = false;
      } else {
        camelCaseOutput += underName[i];
      }
    }
    return camelCaseOutput;
}