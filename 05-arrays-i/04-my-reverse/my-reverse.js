// ### My Reverse

// Define a function `myReverse` that accepts an array.

// `myReverse` should return a new array with the elements in reverse order.

// myReverse([1, 2, 3]);    // => [3, 2, 1]

// Do not use the built-in [.reverse method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) for this problem. You can use it on all
// future problems though!

// YOUR CODE BELOW
const myReverseX = (arr) => {
    return arr.reverse();
}

const myReverseAlt = (arr) => {
    let reversedArr = [] ;

    for (i = arr.length-1; i >= 0; i--) {
        let thisElement = arr[i] ;
        reversedArr.push(thisElement);
    }

    return reversedArr;
}


// ALTERNATIVE
const myReverse = (arr) => {
    let reversedArr = [] ;

    // while the length of the array > 0
    while(arr.length) {
        // pop elements off the original array and immediately push them into the reversedArray
        reversedArr.push(arr.pop());
    }

    return reversedArr;
}