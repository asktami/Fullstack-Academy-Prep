// ### My For Each

// Write a function myForEach that accepts an array and a callback function. The behavior of myForEach should mirror the functionality of the native .forEach() array method as closely as possible


// YOUR CODE BELOW
// if you do not incude a return on a function it will automatically return undefined (which is correct)

function myForEach (array, callback) {
    for (let i = 0; i < array.length; i++){
        callback(array[i], i);
    }
}


// TEST 
let sum = 0;

function addToSum(num) {
    sum += num;
 }

let nums = [1, 2, 3];

myForEach(nums, addToSum);

console.log(sum); // 6