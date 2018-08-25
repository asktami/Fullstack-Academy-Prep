// ### My Unshift
// Write a function `myUnshift` that takes an array and a value of any type as arguments.

// `myUnshift` should return a new array, with the given value as the first element
// in the new array.

// myUnshift([1, 2, 3], 0); / => [0, 1, 2, 3];

// Do not use the built-in .shift method for this problem!


// YOUR CODE BELOW
const myUnshift = (arr, val) => {
    let newArr = arr.slice();
    newArr.unshift(val);
    return newArr;
}


// ALTERNATIVE
const myUnshiftAlt1 = (anArr, val) => {
    let newArr = [val] ;

    for (i = 0 ; i < anArr.length; i++) {
            newArr.push(anArr[i]);
    }

    return newArr;
}


// ALTERNATIVE
// use .concat() to take 1 array and append another onto the end
const myUnshiftAlt2 = (anArr, val) => [val].concat(anArr) ;

// ALTERNATIVE
// use spread operator
const myUnshiftAlt3 = (anArr, val) => [val, ...anArr];
