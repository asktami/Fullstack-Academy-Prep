// ### Sum Nums

// Write a function, sumNums, that takes a number greater than 1 and returns the sum of all the numbers between the given number and 1. Use recursion.

// sumNums(3); // => 6 (3 + 2 + 1)


// YOUR CODE BELOW
// if num = 3, add 3 + 2 + 1
// so add 3 + 3-1, etc.
// count down from num to 1

function sumNums(num){
    sum = 0;

    // stop when number = 1
    if( num === 1){
        return sum += num;
    }

    // returns the sum of all the numbers
    sum += num;
    return sum + sumNums(num -1);
}








// ALTERNATIVE
const sumNumsALT = (num) => {

    if(num === 1) return num;
    
    return num + sumNums(num - 1);

}