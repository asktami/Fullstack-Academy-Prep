// ### My Includes

// Define a function, `myIncludes`, that accepts an array and a searchValue.

// `myIncludes` should return true if the searchValue is an element in the array.
// Otherwise, `myIncludes` should return false.

// Do not use the built-in [.includes array method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) during this problem.
// Feel free to use it on any future problem though! Note that strings have an
// [.includes method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes), too.

// myIncludes([10, 20, 30], 20); // => true
// myIncludes(['apples', 'bananas', 'citrus'], 'pears'); // => false

// YOUR CODE BELOW
// using .includes
const myIncludesAlt = (arr, searchValue) => {
    return arr.includes(searchValue);
}

// ALTERNATIVE
const myIncludesAlt2 = (arr, searchValue) => {
    if(arr.indexOf(searchValue) > -1) return true;
    return false;
}

// ALTERNATIVE
const myIncludes = (arr, searchValue) => {

    for (let i = 0 ; i < arr.length ; i++) {
        let thisElement = arr[i];

        if(thisElement === searchValue) return true;
    }

    return false;
}

