// ### Stringify

// Define a function, stringify, that takes a callback and returns a new function.

// When the new function is called, it should call the callback, and return the value returned by the callback, but not before explicitly coercing the returned value to a string.

// YOUR CODE BELOW
function stringifyALT(callback){

    return function(){
        return callback().toString();
    }
}


// ALTERNATIVE
const stringify = (callback) => {
    return () => {
        return String(callback());

        // alternative:
        //return `${callback()}`;
    }
}

// TEST:
function returnsANumber() {
    return 100;
  }
  
let newFunction = stringify(returnsANumber);
newFunction();  

//Output:
console.log(newFunction());    // => '100'