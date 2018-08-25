// ### Even and Odd

// Define a function, `evenAndOdd`, that accepts an array.

// `evenAndOdd` should return a new array. The first element in the new array
// should be an array with all of the even numbers from the original array. The
// second element in the new array should be an array with all of the odd numbers
// from the original array.

// evenAndOdd([1, 2, 3, 4, 5, 6]); // => [[ 2 ,4, 6 ], [ 1, 3, 5 ]]

// YOUR CODE BELOW
const evenAndOdd = anArray => {
  debugger;
  const evenArray = [];
  const oddArray = [];

  for (i = 0; i < anArray.length; i++) {
    const element = anArray[i];

    // when is odd nbr, element % 2 = 1, so true
    if (element % 2) oddArray.push(element);
    else evenArray.push(element);
  }

  return [evenArray, oddArray];
};
