// ### Times Tables

// Write a function that generates a 'Times Tables' function for any number passed in. The function should accept a single parameter (a number) and return a function that itself returns the product of that number and any number passed in.

// let ninesTable = timesTable(9);
// ninesTable(8)    // => 72

// let twelvesTable = timesTable(12);
// twelvesTable(100)    // => 1200


// YOUR CODE BELOW
function timesTableALT(num1){

    return function(num2){

        return num1 * num2;
    }
}

// ALTERNATIVE
const timesTable = num1 => num2 => num1 * num2;