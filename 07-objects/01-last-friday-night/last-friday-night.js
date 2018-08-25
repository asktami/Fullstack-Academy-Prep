// ### Last Friday Night

// According to the song, Katy Perry "maxed our credit cards".
// Define a function, `lastFridayNight`, takes an array of transactions.

// `lastFridayNight` should return the total amount she spent last Friday night.

// let transactions = [
//     {
//       name: 'apples',
//       amount: 5
//     }, {
//       name: 'kleenex',
//       amount: 2
//     }, {
//       name: 'knitting supplies',
//       amount: 10,
//     }
//   ];

// lastFridayNight(transactions); // => 17

// YOUR CODE BELOW


const lastFridayNightAlt1 = (transactions) => {
    let sum = 0;

    // loop thru ARRAY elements
    for(let i = 0; i < transactions.length; i++) {
        
        let element = transactions[i];  // each object !!
        let amount = 0;

        // loop thru OBJECT elements
        for (let key in element) {    // element = object !!
            if(key === 'amount') {
                let amount = element[key];
                sum += amount;
            }
        }
    }
    return sum;
}









// ALTERNATIVE
const lastFridayNightAlt2 = (transactions) => {
    let sum = 0;

    // loop thru ARRAY elements
    for(let i = 0; i < transactions.length; i++) {
        
        let transaction = transactions[i];  // each object
        sum += transaction.amount;     // object.amount value
    }
    return sum;
}






// ALTERNATIVE
const lastFridayNight = (transactions) => {
    let sum = 0;

    // loop thru ARRAY elements
    for(let i = 0; i < transactions.length; i++) {
        
        // using spread
        let { amount } = transactions[i];  // each object
        sum += amount;     // object.amount value
    }
    return sum;
}
