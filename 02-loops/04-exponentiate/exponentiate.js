// ### Exponentiate

// Write a function exponentiate that accepts two arguments:
// 1. base (number)
// 2. power (number)

// exponentiate should return the result of raising the base by the power.
// Assume the power argument will always be an integer greater than or equal to zero.
// Don't forget that any number raised to the 0th power is equal to 1!

// Do not use the built-in [Math.pow() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow), but feel free to use it moving forward!

// exponentiate(2, 2)    // => 4
// exponentiate(3, 4)    // => 81

// YOUR CODE BELOW
function exponentiate(base, power) {
    debugger;

    let result = 1; // handles if power = 0

    for (let i = 1; i <= power; i++) {
        result = result * base; // aka result *= base;
    }

    return result;
}

console.log('exponentiate =', exponentiate(2, 2)); // 4
console.log('exponentiate =', exponentiate(3, 4)); // 81
console.log('exponentiate =', exponentiate(3, 1)); // 3
console.log('exponentiate =', exponentiate(3, 0)); // 1







// ALTERNATIVE
function exponentiateAlt(base, power) {
    debugger;

    let result = 1;

    for (let i = 0; i < power; i++) {
        result *= base;
    }

    return result;
}


// ALTERNATIVE
const exponentiateAlt2 = (base, power) => base ** power;