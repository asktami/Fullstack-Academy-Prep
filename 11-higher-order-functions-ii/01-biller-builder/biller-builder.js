// ### Biller Builder

// Write a function billerBuilder that takes the name of a state as a parameter.
// billerBuilder should return a new function that takes the price of an item and
// returns the correct final price of the item, given the following:
//   - if NY, charge 3% for shipping and 4% for sales tax
//   - if NJ, charge 5% for shipping and 6.625% for sales tax


// let newYorkBiller = biller('NY');
// newYorkBiller(100) // => 107.12 (100 * 1.03 * 1.04)

// let newJersBiller = biller('NJ');
// newJersBiller(100) // => 111.95625 (100 * 1.05 * 1.06625)

// YOUR CODE BELOW
function billerBuilderX (state) {

    return function(price){
        if(state === 'NY') return price * 1.03 * 1.04;

        if(state === 'NJ') return price  * 1.05 * 1.06625;
    }
}


// ALTERNATIVE
// don't need the 2nd IF statement
function billerBuilderALT (state) {

    return function(price){
        if(state === 'NY') return price * 1.03 * 1.04;

        return price  * 1.05 * 1.06625;
    }
}


// ALTERNATIVE
// using SWITCH 
function billerBuilderALT2 (state) {

    return function(price){
        switch (state) {
        case 'NY':
            return price * 1.03 * 1.04;
            break;
    
        default:
            return price  * 1.05 * 1.06625;
            break;
        }
    }
}


// ALTERNATIVE
// using SWITCH too
function billerBuilder (state) {

    function generateBill (shipping, sales){
        return function(amount){
            return amount * shipping * sales;

            // return (amount * shipping * sales).toFixed(2);   // rounds to 2 decimal points
        }
    }
        switch (state) {
        case 'NY':
            return generateBill(1.03,1.04);
            break;
    
        case 'NJ':
            return generateBill(1.05,1.06625);
            break;
    
        default:
            return generateBill(1,1);
            break;
        }
}