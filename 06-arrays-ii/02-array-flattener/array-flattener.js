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


// BEST
const arrayFlattener = (twoDimensionalArray) => {

    let flatArray = twoDimensionalArray.reduce((acc, element) => { 
        if(Array.isArray(element)) {
            acc = acc.concat(element) ;
        } else {
            acc.push(element) ;
        }
        
    return acc;

    }, []);

    return flatArray;
}