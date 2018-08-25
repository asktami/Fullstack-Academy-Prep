// ### Only One

// Write a function `onlyOne` that accepts three arguments of any type.

// `onlyOne` should return true only if exactly one of the three arguments are
// truthy. Otherwise, it should return false.

// Do not use the equality operators (`==` and `===`) in your solution.


// YOUR CODE BELOW
// const onlyOne = (...args) => {
//     let count = 0;
//     for( i = 0; i < args.length; i++) {
//         if(args[i]){
//             count++;
//         }
//     }
//     if (count === 1) {
//         return true;
//     } else {
//         return false;
//     }
// }

// ALTERNATIVE
// const onlyOne = (a, b, c) => (!!a && !b && !c)  || (!a && !!b && !c) || (!a && !b && !!c);

// ALTERNATIVE
// !! gets the truthy value, booleans get coerced into 1 or 0
const onlyOne = (a, b, c) => !!a + !!b + !!c === 1;

onlyOne(false, false, true); // => true
onlyOne(0, 1, 2) // => false