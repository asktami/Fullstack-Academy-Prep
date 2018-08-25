// ### Rotate Array

// Define a function, `rotateArray`, that accepts two arguments:
//   1. originalArray (array)
//   2. rotateNum (number)

// YOUR CODE BELOW
const rotateArrayALT = (originalArray, rotateNum) => {
    let copiedArray = originalArray.slice();
    let newArr = [];
    let removedArray = [];

// If the rotateNum is positive, `rotate` should return a copy of the original
// array rotated to the right by the rotateNum of indices.

// rotate([1, 2, 3, 4, 5], 1) // => [5, 1, 2, 3, 4]
// ['first', 'second', 'third', 'fourth'], 1)  // => [ 'fourth', 'first', 'second', 'third' ]

    if (rotateNum > 0){
    // .pop() method to REMOVE and return the LAST element added to the Array
    for (let i = 0; i < rotateNum ; i++) {
    let element = copiedArray[i];
    removedArray.push(copiedArray.pop());
    }
    newArr = removedArray.concat(copiedArray);
    }

// If the rotateNum is negative, `rotate` should return a copy of the original
// array rotated to the left by the rotateNum of indices.

// rotate([1, 2, 3, 4, 5], -1) // => [2, 3, 4, 5, 1]
// rotateArray(['first', 'second', 'third', 'fourth'], -3) // => ['fourth', 'first', 'second', 'third']);

    if (rotateNum < 0){
    // .shift() method to REMOVE the FIRST element in the Array

    for (let i = 0; i < (rotateNum * -1) ; i++) {
    let element = copiedArray[i];
    removedArray.push(copiedArray.shift(element));
    }
    newArr = copiedArray.concat(removedArray);
    }

// If the rotateNum is 0, `rotate` should return a copy of the original array
// without rotating it.
// rotate([1, 2, 3, 4, 5], 0) // => [1, 2, 3, 4, 5]
    if(rotateNum === 0){
    newArr = copiedArray;
    }

    return newArr;
}





// ************************************************
// ALTERNATIVE
// using .slice()
// .SLICE(startIndex, endIndex)
const rotateArrayALT2 = (originalArray, rotateNum) => {

    let front = originalArray.slice(-rotateNum);
    let end = originalArray.slice(0, -rotateNum);

    return front.concat(end);
}

































// ************************************************
// another ALTERNATIVE
// .UNSHIFT(value) = ADD the to START of the array
// .SHIFT(value) = REMOVE from the START of the array
const rotateArray = (originalArray, rotateNum) => {

    const direction = rotateNum >= 0 ? 'right' : 'left';
    // right = remove from the right
    // left = remove from the left

    // copy original array
    const rotatedArray = originalArray.slice();

    for (let i = 0; i < Math.abs(rotateNum) % originalArray.length ; i++) {
        if (direction === 'right') {
            // add to the start - unshift
            // what you take from the end - pop
            rotatedArray.unshift(rotatedArray.pop());
        } else {
            // add to the end - push
            // what you take from the start - shift
            rotatedArray.push(rotatedArray.shift());
        }
    }

    return rotatedArray;
}

// RIGHT: add to the start what you take from the end
// If the rotateNum is positive, `rotate` should return a copy of the original
// array rotated to the right by the rotateNum of indices.

// rotate([1, 2, 3, 4, 5], 1) // => [5, 1, 2, 3, 4]
// ['first', 'second', 'third', 'fourth'], 1)  // => [ 'fourth', 'first', 'second', 'third' ]


// LEFT: add to the end what you take from the start
// If the rotateNum is negative, `rotate` should return a copy of the original
// array rotated to the left by the rotateNum of indices.

// rotate([1, 2, 3, 4, 5], -1) // => [2, 3, 4, 5, 1]
// rotateArray(['first', 'second', 'third', 'fourth'], -3) // => ['fourth', 'first', 'second', 'third']);