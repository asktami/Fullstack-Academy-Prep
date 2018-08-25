// ### Reverse Array
// Write a function, reverseArray, that accepts an array and returns a reversed copy of that array. Use recursion.

// let arr = [1,2,3,4]
// let reversedArr = reverseArray(arr);

// console.log(reversedArr)    // [4,3,2,1]
// console.log(arr)            // [1,2,3,4]

// YOUR CODE BELOW
function reverseArray(array){
    
    // stop if array.length === 1
    if (array.length === 1) return array;


	// reverse array by continuously chopping off thing on end and moving it to the beginning

	// chop off last element, make it first element then
	// concatenate 1st element to remaining array without the last element - processed by function 

	return [array[array.length-1]].concat(reverseArray(array.slice(0, -1)));

}