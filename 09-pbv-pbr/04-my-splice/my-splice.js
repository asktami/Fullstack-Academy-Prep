// ### My Splice
// Write a 'mySplice' function that mirrors the behavior of JavaScript's .splice()array method. However, mySplice should accept the array to operate on as an argument, rather than being invoked as a method on that array.

// mySplice only needs to take one element to add to the array (the .splice method can actually take any number of values to add).

// Do not use .splice in your function.

// let myArray = [1, 2, 3];
// mySplice(myArray, 1, 1, 'apples') // => [2]
// console.log(myArray)    // [1,'apples', 3]

// YOUR CODE BELOW
const mySplice = (array, startIndex, deleteCount, newValue) => {
     let removedElements = [];
     let keptElements = [];

     // keep all elements before the start startIndex
     for (let i= 0; i < startIndex; i++) {
        keptElements.push(array[i]);
     }

     // add the newValue at startIndex
     if (newValue !== undefined) {
        keptElements.push(newValue);
      }

      // add the correct number of elements to remove to the removedElements array
      for (let i = startIndex; i < startIndex + deleteCount; i++){
        removedElements.push(array[i]);
      }

      // add the remaining elements to the keptElements array
      for (let i = startIndex + deleteCount; i < array.length; i++) {
        keptElements.push(array[i]);
      }

      // remove all elements from the original array
        while (array.length) {
        array.pop();
        }

    // push only those element to keep back into array
        for (let i = 0; i < keptElements.length; i++) {
        array.push(keptElements[i]);
    }

    return removedElements;
}

// ******************************************
// ALTERNATIVE
// chopping off elements from the front

const mySpliceALT = (array, startIndex, deleteCount, ...args) => {
    
    // store the beginning of the array
    let removedElements = [];

    // store the deleted elements
    let keptElements = [];

    // keep all elements before the start startIndex
    // update the original array by removing elements to keep
    for (let i= 0; i < startIndex; i++) {
       keptElements.push(array.shift());
    }

     // delete elements (per deleteCount) and store each deleted element in the removedElements array
     // because original element has elements to keep removed, index = 0 is the correct starting point
     for (let i = 0; i < deleteCount; i++){
       removedElements.push(array.shift());
     }

     // loop thru all new elements to be added
     // adding them to the front of the ORIGINAL array
     // because the original array has been modified this whole time
     // WHY NOT go from 1 to < args.lenght?  because we are adding to the FRONT of the original array
     for (let i = args.length - 1; i >= 0; i--) {
        array.unshift(args[i]);
     }

     // reattach the beginning elements onto the original array
     // loop thru the elements to keep 
     // adding them to the FRONT of the original array
     for (let i = keptElements.length - 1; i >= 0; i--) {
        array.unshift(keptElements[i]);
     }

    // return the deleted elements
   return removedElements;
}