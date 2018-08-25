// ### My Last Index Of

// Define a function, `myLastIndexOf`, that accepts up to three arguments:
//   1. array
//   2. searchValue
//   3. startIdx (optional)

// `myLastIndexOf` should return the last index at which the searchValue appears in
// the array.

// If the searchValue isn't in the array, `myLastIndexOf` should return -1.

// If startIdx is defined, `myLastIndexOf` should start looking for the seachValue
// at that index, and then move toward the front of the array as it looks for the
// value.

// You cannot use the built-in [.lastIndexOf method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf) for this problem, but feel free
// to use it in the future! Note that strings also have a [.lastIndexOf method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf).

// myLastIndexOf(['gee', 'gee', 'gee', 'gee', 'baby', 'baby'], 'gee'); // => 3
// myLastIndexOf(['Tiffany', 'Sunny', 'Yoona'], 'Jessica'); // => -1
// myLastIndexOf(['the', 'girls', 'bring', 'the', 'boys', 'out'], 'the', 2); // => 0





// YOUR CODE BELOW
// const myLastIndexOf = (arr, searchValue, startIdx ) => {
//     debugger;
//     let foundIdx = 0;

//     if (arr.indexOf(searchValue) === -1 ) return -1;

//     // if startIdx then start at startIdx and end at 0
//     if(startIdx) {
//         let Idx = startIdx-1;
//         for ( let i = Idx ; i >= 0 ; i-- ) {
//             let currentVal = arr[i];

//             if (currentVal === searchValue) {
//                 foundIdx = i;
//             } 
//         }
//     }

//     // if no startIdx then start at 0 and go thru whole array
//     // ******** SAME as START AT END and end at 0, see ALTERNATIVE
//     if(!startIdx) {
//         for ( let i = 0 ; i < arr.length ; i++ ) {
//             let currentVal = arr[i];

//             if (currentVal === searchValue) {
//                 foundIdx = i;
//             } 
//         }
//     }

//     return foundIdx;
// }


// ALTERNATIVE
const myLastIndexOf = (arr, searchValue, startIdx = arr.length ) => {
         
    for ( let i = startIdx ; i >= 0 ; i-- ) {
         let currentVal = arr[i];
         if (currentVal === searchValue) return i;
     }

         return -1;
}