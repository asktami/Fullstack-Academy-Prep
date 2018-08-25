// ### Array Sum
// Write a function, arraySum, that accepts an array of numbers and returns the sum of all the numbers in the array (no matter how nested!).

// arraySum([1, [2, 3, [4]]]) // => 10

// YOUR CODE BELOW
function arraySum(array){
    sum = 0;
    for (let i = 0 ; i < array.length; i++){
        let element = array[i];

        if(Array.isArray(element)){
            // recursive case
            sum += arraySum(element);
        } else {
            // base case
            sum += element;
        }
    }
    return sum;
}


// ALTERNATIVE using .forEach
function arraySumALT(array){
    sum = 0;
    array.forEach(element => {
    
        if(Array.isArray(element)){
            sum += arraySum(element);
        } else {
            sum += element;
        }
    });
    return sum;
}


// ALTERNATIVE using .reduce
const arraySumALT2 = (array) => {
    return array.reduce((sum, element) => {

        if(Array.isArray(element)){
            return sum + arraySum(element); // must use return 
        } else {
            return sum + element;           // must use return 
        }
    }, 0)// b/c sum starts at 0
    
    return sum;
}