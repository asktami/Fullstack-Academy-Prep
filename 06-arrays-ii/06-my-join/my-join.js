// ### My Join

// Define a function, `myJoin`, that accepts up to two arguments:
//   1. array
//   2. separator (string, optional)

// `myJoin` should return a string with all of the elements from the array joined
// togther. The separator should separate the joined elements:

// If separator is undefined, use ',' as the default separator.

// If any elements in the array are undefined or null, they should be replaced with
// an empty string in the returned string.

// myJoin(['Peter', 'Paul', 'Mary']); // => "Peter,Paul,Mary"

// myJoin(['hello', undefined, 'world'], '-'); // => "hello--world"

// myJoin(['let\'s', 'make', 'a', 'list'], ' '); // => "let's make  a list"
// myJoin(['a', 'b', 'c'], '+'); // => "a+b+c"

// Do not use the built-in [`.join` array method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/joins) in your answer. Feel free to
// use it in all future problems though!















// YOUR CODE BELOW
const myJoin = (anArray, aSeparator = ',') => {
    let joinedString = '';

    // loop thru everything but the last element in the array
    for (let i = 0 ; i < anArray.length-1 ; i++ ) {
        let element = anArray[i];

        // null and undefined = falsey, alternative:
        //  if(element === undefined || element === null)

        if(element) {
            joinedString += element;
        }  else {
            joinedString += ''; // empty string
        }

        joinedString += aSeparator;
    }

    // add the last element
    if(anArray.length) joinedString += anArray[anArray.length-1]; // handle empty array
    return joinedString;
}
