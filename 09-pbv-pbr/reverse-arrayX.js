// ### Reverse Array

// Write a function that accepts an array and reverses that array in place. The
// behavior should mimic the behavior of the native .reverse() array method.
// However, your reverse function should accept the array to operate on as an
// argument, rather than being invoked as a method on that array.

// Do not use the native .reverse() method in your own implementation.

// let myArray = [1, 2, 3, 4];
// reverseArray(myArray);
// console.log(myArray) // [4, 3, 2, 1]

// YOUR CODE BELOW
const reverseArrayALT = (array) => {
    let newArray = [];

    //take from end of array and put into newArray
    // make a, b, c = c, b, a
    for (let i = array.length; i > 0; i--) {
        newArray.push(array.pop());
    }

    // then put into original array as is
    // make c, b, a = c, b, a
    for (let i = newArray.length; i > 0 ; i--) {
        array.push(newArray.shift());
    }

    return array;
}

// ALTERNATIVE using Math.floor
const reverseArray = (myArr) => {

    //switch left and right sides
    for (let i = 0; i < Math.floor(myArr.length/2); i++) {
        let rightIdx = (myArr.length -1) - i;
        let leftIdx = i;

        let rightVal = myArr[rightIdx];
        let leftVal = myArr[leftIdx];

        // switch 
        myArr[leftIdx] = rightVal;
        myArr[rightIdx] = leftVal ;
    }

    return myArr ;
}