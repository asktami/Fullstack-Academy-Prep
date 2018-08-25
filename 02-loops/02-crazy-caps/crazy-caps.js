// ### Crazy Caps
// Define a function, `crazyCaps`, that accepts a string as an argument.
// `crazyCaps` should return a string in which every other character is
// capitalized. The first letter should be lower-cased.
// crazyCaps('fullstack is amazing'); // => fUlLsTaCk iS AmAzInG!

// YOUR CODE BELOW
function crazyCaps(txt) {
    debugger;
    let newString = '';

    for (let i = 0; i <= txt.length-1; i++) {
        
        if( i % 2 === 1) {   // i is odd, and not at index 0
            newString += txt[i].toUpperCase();
        } else {
            newString += txt[i].toLowerCase();
        }
    }

    return newString;
}
console.log('crazyCaps = ', crazyCaps('fullstack is amazing!'));


// ALTERNATIVE
const crazyCapsAlt =  (aStr) => {
    const sanitizedString = aStr.toLowerCase();
    let crazyString = '';

    for ( let i= 0; i < sanitizedString.length ; i++ ) {
        const curChar = sanitizedString[i];

        if ( i % 2 === 1) crazyString += curChar.toUpperCase();
        else crazyString += curChar;
    }

    return crazyString;
}
console.log('crazyCapsAlt = ', crazyCapsAlt('fullstack is amazing!'));
