// ### My Slice

// Define a function, `mySlice`, that accepts up to three arguments:
//   1. originalArray
//   2. startIdx (number, optional)
//   3. endIdx (number, optional)

// `mySlice` should return a copy of the original array. The copy should include
// all of the elements from the orignal array, starting at and including the
// startIdx, up through and excluding the endIdx.

// If the endIdx is undefined, include all the indices starting at and including
// the startIdx through the end of the original array.

// If the startIdx is undefined, return a copy of the original array.

// startIdx and endIdx can be negative numbers, in which case they count indices
// from the back of the array.

// mySlice([1, 2, 3], 1, 2) // => [2]

// mySlice([1, 2, 3], 1) // => [2, 3]

// mySlice([1, 2, 3]) // => [1, 2, 3]

// mySlice([1, 2, 3], -1) // => [3]

// Do not use the built-in [`.slice` array method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) in your answer. Feel free to
// use it in all future problems though!









// YOUR CODE BELOW
const mySlice = (originalArray, startIdx = 0, endIdx = originalArray.length ) => {

    let newArr = [];
    
    // if startIdx / endIdx is negative, count indexes from the end of the array
    if (startIdx < 0)  startIdx =  originalArray.length + startIdx;

    if (endIdx < 0) endIdx =  originalArray.length + endIdx;
   
    // count from the start of the array
    for (let i = startIdx; i < endIdx; i++) {

        let element = originalArray[i];

        newArr.push(element);
     }
    
    return newArr;
}