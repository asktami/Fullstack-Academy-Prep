// ### Odd Couple
// Define a function, `oddCouple`, that accepts an array of numbers as an argument.

// `oddCouple` should return a new array with the first two odd numbers from the
// original array:

// If fewer than two odd numbers exist in the original array, return an empty array
// or an array with the only odd number:

// oddCouple([1, 2, 3, 4, 5]); // => [1, 3]
// oddCouple([10, 15, 20]); // => [15]
// oddCouple(2, 4, 6, 8); // => []


// YOUR CODE BELOW
const oddCouple = (nums) => {
    let oddNums = [];
    
    for (let i = 0 ; i < nums.length ; i++ ) {
        if(nums[i] % 2 === 1) oddNums.push(nums[i]);  // add odd number to new array
        // when new array size = 2, exit this for loop
        if (oddNums.length === 2) break;
    }
    
    return oddNums;
}