// ### Max of Three

// Write a function `maxOfThree` that accepts three number arguments. `maxOfThree`
// should return largest number of the three.

// ```javascript
// maxOfThree(5, 4, 10); // => 10
// maxOfThree(7, 7, 4); // => 7

// YOUR CODE BELOW
// Comparing each number
const maxOfThree = (...numbers) => {
  let final = 0;
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > final) final = numbers[i];
    console.log('numbers[i] =' + numbers[i]);
    console.log('final =' + final);
  }
  return final;
};
console.log('maxOfThree');
console.log(maxOfThree(5, 4, 10));
console.log(maxOfThree(7, 7, 4));
