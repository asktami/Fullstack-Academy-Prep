// ### Sum Digits
// Write a function, sumDigits, that sums all the digits of a given integer (assume positive). Use recursion.

// sumDigits(1234) // => 10

// YOUR CODE BELOW
function sumDigits(num){
    // convert num to string
    // before doing sum convert string to num

    num = String(num);
    sum = 0;

    // stop when num.length === 1
    if(num.length === 1){

        sum += Number(num);
        return sum;

    } else {
        
        // sum += 1st element, pass remaining string without 1st element to function 
        // convert to number when pass to function
        
        sum += Number(num[0]);
        return sum + sumDigits(Number(num.slice(1)));
    }
}