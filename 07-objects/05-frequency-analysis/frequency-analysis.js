// ### Frequency Analysis

// Define a function `frequencyAnalysis` that accepts a string of lower-case
// letters.

// `frequencyAnalysis` should return an object containing the count for each letter
// in the string.


// frequencyAnalysis('abca'); // => {a: 2, b: 1, c: 1}



// YOUR CODE BELOW
const frequencyAnalysis = (aStr) => {

    let frequencyDictionary = {} ;

    // count num times each letter is in string
    // loop thru aStr
    // create an entry in LetterCount each time a new letter
    // increment letterCount each time a letter found again

    for (let i = 0; i < aStr.length; i++) {
        let thisChar = aStr[i];

        if(thisChar in frequencyDictionary) {
            frequencyDictionary[thisChar]++;
        } else {
            frequencyDictionary[thisChar] = 1;
        }
    }

    return frequencyDictionary;
}

// ALTERNATIVE if(!frequencyDictionary[thisChar]) {}