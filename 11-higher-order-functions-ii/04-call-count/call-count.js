// ### Call Count

// Write a function, callCount, that returns a new function. The new function
// should return the number of times its been called.

// let newFunction1 = callCount();
// let newFunction2 = callCount();

// newFunction1(); // => 1
// newFunction1(); // => 2

// newFunction2(); // => 1
// newFunction2(); // => 2


// YOUR CODE BELOW
// defaults are set in the OUTER function

function callCount(){
    let count = 0;
    
    return function(){
        return ++count; // increment by 1 and then return

        // ALTERNATIVE
        // count++;
        // return count; --> return the count after incrementing it
    }
}