// ### Zero Dark Thirty
// Write a function `zeroDarkThirty` that accepts a number as an arguemnt.

// It should return a number with all of the zeroes removed
// If the number 0 is passed in as the argument, return [NaN]
// (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN).

// YOUR CODE BELOW
const zeroDarkThirty = (num) => {
    if (num === 0) return NaN;

    let str = num.toString();
    let newStr = '';

    for (let i = 0; i < str.length; i++) {
        if( str[i] != '0' ) newStr += str[i];
    }
    return parseFloat(newStr);  // parseFloat converts a string to a Decimal
                                // parseInt converts a string to an Integer
}

zeroDarkThirty(102302) // => 1232
zeroDarkThirty(606.203) // => 66.23
zeroDarkThirty(0) // => NaN