// ### Tax Caclulator

// Define a function `taxCalculator` that accepts the price of an item and a state.
// `taxCalculator` should return the after-tax cost of the item, assuming NY's tax
// is 4% and NJ's sales tax is 6.625%.

// ```javascript
// taxCalculator(100, 'NY'); // => 104
// taxCalculator(100, 'NJ'); // => 106.625

// YOUR CODE BELOW
// ALTERNATIVE:
// function taxCalculator(price, state) {
//   const nyTax = 0.04;
//   const njTax = 0.06625;
//   if (state === 'NY') {
//     return price * nyTax + price;
//   } else if (state === 'NJ') {
//     return price * njTax + price;
//   }
// }

// FINAL:
const taxCalculator = (price, state) => {
  const nyTax = 1.04;
  const njTax = 1.06625;
  switch (state) {
    case 'NY':
      return price * nyTax;
    case 'NJ':
      return price * njTax;
    default:
      return price;
  }
};

console.log(taxCalculator(100, 'NY'));
console.log(taxCalculator(100, 'NJ'));
