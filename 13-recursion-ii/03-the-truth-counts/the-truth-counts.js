// ### The Truth Counts
// Write a function, theTruthCounts, that accepts a multi-dimensional array of values. theTruthCounts should return the COUNT of all TRUTHY VALUES inside the multidimesional array.

// theTruthCounts([0, [true, ['yes']]]); // => 2

// YOUR CODE BELOW
function theTruthCounts(array){

    let count = 0;

    for (let i = 0; i < array.length; i++){
    
        let element  = array[i];

        if(Array.isArray(element)){

            count += theTruthCounts(element); 
            // get result from nested object - 1 or 0

        } else if(element)count++;
    }
    
    return count;
}


// ALTERNATIVE using .forEach
const theTruthCountsALT = (array) => {

    let count = 0;

    array.forEach((element) => {
    
        if(Array.isArray(element)){

            count += theTruthCounts(element); 
            // get total number of truthy values from nested array and add to count

        } else if (element)count++;
    })

    return count;
}









//ALTERNATIVE using .reduce
const theTruthCountsALT2 = (array) => {

    return array.reduce((count, element) => {

        if(Array.isArray(element)){

            return count + theTruthCounts(element); 
            // get total number of truthy values from nested array and add to count

        } else if (element) return count + 1;

        return count;
    }, 0 )  // to initialize count to 0
}