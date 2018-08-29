// ### Array Flattener

// Define a function, `arrayFlattener`, that accepts a two-dimensional array as an argument.

// `arrayFlattener` should return a new, one-dimensional array.

// arrayFlattener([1,[2, 3], 4]); // => [1, 2, 3, 4]

// YOUR CODE BELOW
const arrayFlattenerALT = (twoDimensionalArray) => {
    let flatArray = [];

    for(let i = 0 ; i < twoDimensionalArray.length; i++) {

        let element =  twoDimensionalArray[i];

        if( Array.isArray(element) ) {

            for(let j = 0 ; j < element.length; j++) {
                let innerElement = element[j];

                flatArray.push(innerElement) ;
            }

        } else {
            flatArray.push(element) ;
        }
    }

    return flatArray;
}

 

// ALTERNATIVE using concat
const arrayFlattenerALT2 = (twoDimensionalArray) => {
    let flatArray = [];

    for(let i = 0 ; i < twoDimensionalArray.length; i++) {

        let element =  twoDimensionalArray[i];

        if( Array.isArray(element) ) {
            flatArray = flatArray.concat(element) ;

        } else {
            flatArray.push(element) ;
        }
    }

    return flatArray;
}


// BEST - using arr.reduce()
const arrayFlattener = (twoDimensionalArray) => {

// added to handle input = string vs. an array b/c was getting "twoDimensionalArray.reduce is not a function" from testem
let arr = Array.isArray(twoDimensionalArray) ? twoDimensionalArray : twoDimensionalArray.split();

return arr.reduce((accumulator, element) => accumulator.concat(element), []);
}




// EXTRA
// enable deep level array flattening using recursion with arr.reduce() and arr.concat()

function flattenDeep(arr) {

   return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}

console.log('flattenDeep = ', flattenDeep( [ 1, 2, 3, [1, 2, 3, 4, [2, 3, 4]], [9, 8, 7] ] ));   // [ 1, 2, 3, 1, 2, 3, 4, 2, 3, 4, 9, 8, 7 ]