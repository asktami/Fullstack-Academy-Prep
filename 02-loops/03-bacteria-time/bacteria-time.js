// ### Bacteria Time

// Define a function, `bacteriaTime`, that accepts two arguments:
//   1. currentNum (num) - number of starting bacteria
//   2. targetNum (num) - desired number of bacteria

// Assuming that the number of bacteria double every 20 minutes, `bacteriaTime` should
// return the number of minutes required for the number of bacteria to grow from
// the currentNum to a number equal to or larger than the targetNum.

// You can assume the currentNum will be a positive integer. If the targetNum is
// smaller than the currentNum, return the string 'targetNum must be larger than currentNum'.

// bacteriaTime(1, 8); // => 60

// YOUR CODE BELOW
function bacteriaTime (currentNum, targetNum) {
    debugger;

    if (targetNum < currentNum ) {
        return 'targetNum must be larger than currentNum';
    }

    let nbrMinutes = 0 ;
    
    for (let i = 1; currentNum < targetNum ; i++) {
            nbrMinutes = i * 20 ;
            currentNum *= 2;    
    }
    
    return nbrMinutes;
}

console.log('bacteriaTime = ' + bacteriaTime(1,8));





/**************************** */
// ALTERNATIVE

function bacteriaTimeAlt (currentNum, targetNum) {
    debugger;

    if (targetNum < currentNum ) {
        return 'targetNum must be larger than currentNum';
    }

    let nbrMinutes = 0 ;
    
    while (currentNum < targetNum) {
        currentNum *= 2;
        nbrMinutes += 20;
    }
    
    return nbrMinutes;
}

console.log('bacteriaTimeAlt = ' + bacteriaTimeAlt(1,8));


/**************************** */
// ALTERNATIVE
const bacteriaTimeAlt2 = (currentNum, targetNum) => {
    if (targetNum < currentNum) return 'targetNum must be larger than currentNum';

    let currentTime = 0;
    let aliveBacteria = currentNum;

    while (aliveBacteria < targetNum) {
        currentTime +=20;
        aliveBacteria *=2;
    }

    return currentTime;
}

console.log('bacteriaTimeAlt2 = ' + bacteriaTimeAlt2(1,8));
