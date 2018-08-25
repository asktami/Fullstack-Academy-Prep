// ### Backward String
// Write a function, backwardString, that receives a string. It should log every letter in the string, from the last character to the first. Use recursion.

// NOTE: As with the last problem, the tests will check how many times console.log is called.
// backwardString('ask');
// k
// s
// a

// YOUR CODE BELOW
// go from END of string to START

function backwardString(string){

    // stop when length === 1
    if(string.length === 1){
    
     console.log(string);

    } else {

    // console.log each character, starting at end
    // console.log last character
    console.log(string[string.length-1]);

    // do recursion - pass remainder of string, without lastChar using slice = string.slice(0,-1)
    
    backwardString(string.slice(0,-1));
    }
}




// ALTERNATIVE
const backwardStringALT = (string) => {
    
    console.log(string[string.length - 1]);

    // We remove a piece of the original input as we recurse until we get to nothing left

    if(string.length > 1) backwardString(string.slice(0, -1));
}