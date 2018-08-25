// ### Very Odd
// Write a function, veryOdd. The function accepts an array of numbers.
// It should return a new array that contains only the odd numbers from the given
// array. veryOdd must not mutate the given array.

// let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
// let oddNums = veryOdd(allTheNums);

// console.log('oddNums:', oddNums); // [1, 3, 5, 7];
// console.log('allTheNums:', allTheNums); // [1, 2, 3, 4, 5, 6, 7, 8]



// YOUR CODE BELOW
// Function returns a brand new array and so doesn't do anything to the original array

function veryOdd(arrayOfNums) {
    let oddArray = [];

    for (let i = 0; i < arrayOfNums.length; i++){

        if(arrayOfNums[i] % 2){     // ODD b/c copiedArray[i] % 2 == 1, ie. TRUE
            oddArray.push(arrayOfNums[i]);
        }
    }
    
    return oddArray;
}