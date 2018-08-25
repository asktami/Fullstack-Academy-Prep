// ### My Or, My And

// Define a function, `myOr`, that accepts three arguments of any type.
// `myOr` should return the same result as the buit-in `||` operator

// returns the first value if it is the first truthy value
// returns the second value if it is the first truthy value
// returns the third value if it is the first truthy value
// returns the third value if none of the values are truthy


// Then, define a function, `myAnd`, that accepts three arguments of any type.
// `myAnd` should return the same result as the buit-in `&&` operator

// returns the first value if it is the first falsey value
// returns the second value if it is the first falsey value
// returns the third value if it is the first falsey value
// returns the third value if all of the values are truthy


// YOUR CODE BELOW
// const myOr = (a,b,c) => {
//     if(!!a) return a;
//     if(!!b) return b;
//     return c;
// }

// ALTERNATIVE
// const myAnd = (a,b,c) => {
//     if(!a) return a;
//     if(!b) return b;
//     return c;
// }

// ALTERNATIVE:
// only whatever is true is the result
const myOr = (a,b,c) =>  a || b || c;
const myAnd = (a,b,c) =>  a && b && c;

myOr(true, true, false) === (true || true || false); // => true
myAnd(1, 'apples', true) === (1 && 'apples' && true); // => true
