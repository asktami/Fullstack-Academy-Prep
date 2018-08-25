// ### Leet Translator

// "Leet" or 1337 is a popular alternative alphabet used by internet "hackers".

// Define a function called `leetTranslator` that take a string of normal
// characters.

// `leetTranslator` should return a new string that is the translation of the
// original string into leet.

// The leet codex is below, along with an array of english letters and an array of
// the corresponding leet characters. 

// Use the two arrays to create a leetCodex object to use in making the translations.

// leetTranslator('fullstack'); => ph|_|115+@(|<

let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];

// YOUR CODE BELOW
// leetTranslatorALT = (aString) => {
//     let lowerCaseString = aString.toLowerCase();
//     let newString = '';

//     // loop thru aString, finding leetChars value at same index
//     for (let i = 0; i < lowerCaseString.length; i++) {

//         let thisCharacter = lowerCaseString[i]; 

//         // find letter index
//         let letterIdx = letters.indexOf(thisCharacter);

//         // get value at that same position in leetChars
//         let leetCharacter = leetChars[letterIdx];

//         newString += leetCharacter;
//     }

//     return newString;
// }





//ALTERNATIVE 
// create a dictionary, object with key-value pairs of letter and matching leetChar
const leetTranslator = (aStr) => {

    let translatedString = '';
    const leetDict = {};    // an object

    for (let i = 0; i < letters.length; i++) {
        const currentLetter = letters[i];
        const currentLeet = leetChars[i];

        leetDict[currentLetter] = currentLeet;
    }

    for (let i = 0; i < aStr.length; i++){

        let thisChar = aStr[i].toLowerCase();
        translatedString += leetDict[thisChar];
    }

    return translatedString;
}