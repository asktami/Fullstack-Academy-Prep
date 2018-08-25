// ### Most Vowels

// Define a function, `mostVowels`, that accepts one argument, a string of words.
// `mostVowels` should return the word that has the most vowels.
// mostVowels('I am a keeper with some real rhythms'); // => keeper
// If none of the words have any vowels, return an empty string.
// mostVowels('try my gym'); // => ''

// YOUR CODE BELOW
const mostVowels = (str) => {
    debugger;
    let vowels = 'aeiouAEIOU';
    // separate words in string separated by space
    let strArray = str.split(' ');

    let previousNbrVowels = 0;
    let thisWord = '';
    let mostVowels = '';

    // loop thru each word
    for (let i = 0; i < strArray.length; i++) {
        // remove non-alphnumeric characters
        thisWord = strArray[i].replace(/[^0-9a-z]/gi, '');
        let nbrVowels = 0;

    // count vowels in each word
        for(j = 0 ; j < thisWord.length ; j++) {
            let char = thisWord[j];

            for(x = 0; x < vowels.length; x++) {
                let thisVowel = vowels[x];
                if(char === thisVowel) nbrVowels++ ;
             }
        }

        if(nbrVowels > previousNbrVowels) {
            mostVowels = thisWord;
            previousNbrVowels = nbrVowels;
        } 
    }

    return mostVowels;
}


// ALTERNATIVE
const  mostVowelsAlt = (aStr) => {
    // remove periods and commas from string, then convert to an array of words separated by space
    const wordsArray = aStr
    .split('.')
    .join('')
    .split(',')
    .join('')
    .split(' ');
    const VOWELS = 'aeiouAEIOU';

    let maxVowelCount = 0;
    let maxWord = '';

    for (let i = 0; i < wordsArray.length; ++i) {
        const currentWord = wordsArray[i];

        let currentVowelCount = 0;

        // this loops job is to count vowels per word, when its done looping, we have finished counting for this word
        for (var j = 0 ; j < currentWord.length; ++j) {
            const currentLetter = currentWord[j];

            // found a vowel
            if(VOWELS.indexOf(currentLetter) !== -1) {
                ++currentVowelCount;
            }
        }
        // done counting vowels
        if (currentVowelCount > maxVowelCount) {
            maxVowelCount = currentVowelCount;
            maxWord = currentWord;
        }
    }
    // this outer loops completion says that we have gone through each word, counted the vowels in each word, and stored the pertinent info.
    return maxWord;
}