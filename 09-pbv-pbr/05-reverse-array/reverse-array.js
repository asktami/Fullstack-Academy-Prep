// ### Reverse Array

// Write a function that accepts an array and reverses that array in place. The
// behavior should mimic the behavior of the native .reverse() array method.
// However, your reverse function should accept the array to operate on as an
// argument, rather than being invoked as a method on that array.

// Do not use the native .reverse() method in your own implementation.

// let myArray = [1, 2, 3, 4];
// reverse(myArray);
// console.log(myArray) // [4, 3, 2, 1]


// YOUR CODE BELOW
const reverseArrayALT = (myArray) => {
    let copiedArray = [];

    // copy elements to a new array
    for (i = 0; i < myArray.length; i++) {
        copiedArray.push(myArray[i]);
    }

    // delete all elements from original array
    while (myArray.length){
        myArray.pop();
    }

    // add elements from copyArray to original array
    // a, b, c  becomes c, b, a
    // because adding to the FRONT of original array
    for (i = 0; i < copiedArray.length; i++) {
        myArray.unshift(copiedArray[i]);
    }

    return myArray;
}













// ALTERNATIVE
function reverseArrayALT2 (array) {
    let originalElements = [];
  
    // pop all of the elements from the original array, and store them in a new array
    // a, b, c, becomes c, b, a
    while (array.length) {
      originalElements.push(array.pop());
    }
  
    // pop all of the elements out of new array, unshift them back into the original array
    // c, b, a becomes a, b, c
    while (originalElements.length) {
      array.unshift(originalElements.pop())
    }
  
    return array;
  }
  


// ********* NOTE:
// take thing from one side and switch it to the other side
// can think about this problem as distance from the middle
// where we start at the furthest distance on each side and move inwards to the middle

const reverseArray = (anArr) => {

    // loop from the start to the middle
    // comparing the start to the end
    // then switch left and right sides
    for (let i = 0; i < Math.floor(anArr.length /2); i++) {
        
        const rightPos = (anArr.length - 1) - i;

        // grab elements from each side
        const leftElem = anArr[i];
        const rightElem = anArr[rightPos];

        // switch elements on each side
        anArr[i] = rightElem;
        anArr[rightPos] = leftElem;
    }

    return anArr;
}