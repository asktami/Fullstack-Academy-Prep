// ### My Splice
// Write a 'mySplice' function that mirrors the behavior of JavaScript's .splice()array method. However, mySplice should accept the array to operate on as an argument, rather than being invoked as a method on that array.

// mySplice only needs to take one element to add to the array (the .splice method can actually take any number of values to add).

// Do not use .splice in your function.

// let myArray = [1, 2, 3];
// mySplice(myArray, 1, 1, 'apples') // => [2]
// console.log(myArray)    // [1,'apples', 3]

// YOUR CODE BELOW
const mySplice = (array, startIdx, numRemove, ...arr) => {

    let keep = [];
    let remove = [];

    // put everything before original array startIdx
    // into Keep array
    // AND remove from FRONT of original array
    for (let i = 0; i < startIdx; i++){
        keep.push(array.shift());
    }

    // add to Keep the new elements
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== undefined){
            keep.push(arr[i]);
        }
    }

    // delete from the FRONT of original array * numRemove times,  NOT element at index
    // if numRemove = 1
    // only delete elment at indx 0
    // at end original array will only have elements to keep

    // AND ADD to remove array
    for (let i = 0; i < numRemove; i++){
        remove.push(array.shift());
    }
    
    // add keep to the FRONT of the remaining elements in original
    // if keep = a, b, c  add as c, then b, then a
    for (let i = keep.length; i > 0; i--) {
        array.unshift(keep.pop());
    }

    return remove;
}