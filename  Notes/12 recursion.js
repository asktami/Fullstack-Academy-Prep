// RECURSION: when a function calls ITSELF, an alternative to iteration/loops
// - a good way to break big problems into smaller chunks
// - can use a loot of memory

// - the function call stack: JS is single threaded - only 1 function runs at a time; when a function is called it is at the top of the call stack - all of the variables/values in its scope are at the top of the call stack.  Inner functions get put to the top of the call stack and their outer function is paused and then put to the top of the call stack.

// NOTE NOTE NOTE *******************************
// -- need to define a base case (stop condition)
// -- recursive case must change the input to the function so that you will eventually trigger the base case!!!


// COUNTDOWN EXAMPLE:
// using a for loop
const countdownLoop = (num) => {
    for (let i = num; i >= 1; i--) {
        console.log(i);
    }
}
countdownLoop(5);       // 5 4 3 2 1
console.clear();


// using recursion
// 1. function that console logs a number
const countdownOnce = (num) => {
    console.log(num);
}
countdownOnce(5);       // 5
console.clear();


// 2. instead of manually calling countdown over and over, have countdown call itself, subtracting 1 from num each time
function countdownBad(num) {
    console.log(num);
    countdown(num - 1);
}
// countdownBad(5);    -->  RangeError b/c never stop the countdown, get stack overflow, stack too large
console.clear();

// 3. Stop infinite recursion!
// - add STOP CONDITION, aka "BASE CASE"
// - 
function countdown(num) {
    if(num < 1){
        console.log('done');
    } else {
        console.log(num);
        countdown(num - 1);
    }
}
countdown(5);       // 5
console.clear();



// Recursion ore complicated when function must return a values
// - start by defining a base case
// - test that base case works before testing recursive

// FACTORIAL example (a number multiplied by all the numbers between it and 1, ex: 3 factorial = 3! = 3 * 2 * 1)
// what are the simple input/output for a base case:
// a.  0! = 1 and 1! = 1
// b. notice pattern: ex: 5! = 5 * 4!

function factorial(num){
    //  ****** BASE CASE 0! and 1! ******
    if(num === 0  || num === 1){
        return 1;
    }

    // if num = 2 what do we get if we call factorial again with num - 1 


    //  ****** RECURSIVE CASE: num must get closer to 0 or 1 (ie. get to the base case) ******
    let result = num * factorial(num - 1);
    return result;
}

// console.log('factorial(0): ', factorial(0));    //1
// console.log('factorial(1): ', factorial(1));    // 1
// console.log('factorial(2): ', factorial(2)); 
console.log('factorial(10): ', factorial(10)); 

// - Tips for approaching recursion problems
// 1. define your base case 1st! using simple inputs and outputs
// 2. test base case using simplest possible input that results in one recursive call
// 3. then test against more complex inputs

// **********************************
// RECURSION AND ARRAYS AND STRINGS
// 1.  base case = empty array or length = 1

// 2.  if array.length === 1, sum is easy to calculate

// 3.  if the base case required the iterable to have a length of 1 or 0 it means that the recursive case has to reduce the length of the iterable with every recursive call 

// 4. what type of thing should function return?  base case and recursive case should return the same type of thing!

// 5. NOTE nested arrays can be approached differently! See next module.