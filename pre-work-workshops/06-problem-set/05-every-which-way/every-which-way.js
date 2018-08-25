// ### Every Which Way

// Write a function `everyWhichWay` that accepts three number arguments. `everyWhichWay`
// should:

//   - return 'sum' if the sum of the first two numbers equals the third
//   - return 'difference' if the first number minus the second equals the third
//   - return 'product' if the product of the first two numbers equals the third
//   - return 'fraction' if the first number divided by the second equals the third
//   - return null if none of the above are true

// everyWhichWay(10, 20, 30); // => sum
// everyWhichWay(50, 20, 30); // => difference
// everyWhichWay(4, 4, 16); // => product
// everyWhichWay(100, 10, 10); // => fraction
// everyWhichWay(1, 1000, 50); // => null

// YOUR CODE BELOW
// ALTERNATIVE:
// const everyWhichWay = (nbr1 = 0, nbr2 = 0, nbr3 = 0) => {
//   if (nbr1 + nbr2 === nbr3) {
//     return 'sum';
//   } else if (nbr1 - nbr2 === nbr3) {
//     return 'difference';
//   } else if (nbr1 * nbr2 === nbr3) {
//     return 'product';
//   } else if (nbr1 / nbr2 === nbr3) {
//     return 'fraction';
//   } else return null;
// };

// BETTER WAY:
const everyWhichWay = (nbr1 = 0, nbr2 = 0, nbr3 = 0) => {
  if (nbr1 + nbr2 === nbr3) return 'sum';
  if (nbr1 - nbr2 === nbr3) return 'difference';
  if (nbr1 * nbr2 === nbr3) return 'product';
  if (nbr1 / nbr2 === nbr3) return 'fraction';
  return null;
};

console.log('everyWhichWay');
console.log(everyWhichWay(10, 20, 30));
