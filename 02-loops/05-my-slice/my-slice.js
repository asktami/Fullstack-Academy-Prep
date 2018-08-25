// ### My Slice

// Write a function `mySlice` that accepts up to three arguments:
// 1. originalString (string)
// 2. startIdx (number, optional)
// 3. endIdx (number, optional)

// `mySlice` should return a string. The returned string should be a copy of the
// original string. If the user defines a startIdx, the returned string should
// start at that index:

// ```javascript
// mySlice('slice and dice', 2)    // => ice and dice
// ```

// If the user defined an endIdx, the returned string should end at the last index
// before the endIdx:

// ```javascript
// mySlice('slice and dice', 2, 5)    // => ice
// ```

// If the user doesn't define either the startIdx or the endIdx, return the entire
// originalString:

// mySlice('slice and dice')    // => slice and dice
// ```

// You can assume the startIdx will always be less than or equal to the endIdx.

// Do not use the built in [.slice string method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice). Feel free to use it in all future
// workshop problems, though!




// YOUR CODE BELOW
function mySlice(originalString, startIdx = 0 , endIdx = originalString.length) {
debugger;
    let resultString = '';

    for (let i = startIdx; i < endIdx; i++) {
        resultString += originalString[i];
    }

    return resultString;
}

console.log('mySlice =', mySlice('a piece of pie', 2, 7));  // => piece
console.log('mySlice =', mySlice('slice and dice'));        // => slice and dice
console.log('mySlice =', mySlice('a piece of pi'));           // => a piece of pi
console.log('mySlice =', mySlice('slice and dice', 2));     // => ice and dice
console.log('mySlice =', mySlice('slice and dice', 2, 5));  // => ice
console.log('mySlice =', mySlice('a piece of pie', 2));     // => piece of pie