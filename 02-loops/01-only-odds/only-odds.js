// ### Only Odds

// Define a function, `onlyOdds`, that accepts a number as an argument. `onlyOdds`
// should should return the sum of all the odd numbers between the given number
// and 1.

// If `onlyOdds` receives an argument less than 1, it should return 0.

// onlyOdds(6); // => 9 (5 + 3 + 1)

// YOUR CODE BELOW
function onlyOdds(num){
    debugger;   // add the debugger keyword to be able to step thru the debugger
    let sum = 0;

    for(let i = num; i >= 1; i--) {
        if(i % 2 != 0) {    // could also be i % 2 ==== 1 (means is odd)
            sum += i;
        }
    }
    
    return sum;
}

console.log('onlyOdds = ', onlyOdds(6));    // invoke the debugger














// ALTERNATIVE using while loop
function onlyOddsAlt(num) {
    let sum = 0;

    while (num >=1){
        if( isOdd(num) ) {
            sum += num;
        }
        num--;
    }

    return sum;

    // helper function takes a number and returns true if that number is odd
    function isOdd(num){
        return num %2 === 1;
    }
}

console.log('onlyOddsAlt = ', onlyOddsAlt(6));






// ALTERNATIVE
const onlyOddsAlt2 = (num) => {
    let sum = 0;

    for (let i = 1; i <= num; i++) {
        if (i % 2 === 1) sum += i;
    }

    return sum;
}

console.log('onlyOddsAlt2 = ', onlyOddsAlt2(6));    // 9
console.log('onlyOddsAlt2 = ', onlyOddsAlt2(0));    // 0
