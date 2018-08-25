// ### Count Vowels

// Write a function, countVowels, that accepts a string and returns the number of vowels in that string. Use recursion.

// countVowels('Four score and seven years'); // => 9

// YOUR CODE BELOW
function countVowels(string){

    let count = 0;

    const VOWELS = ('aeiou');
    
    // convert string to lowercase
    string = string.toLowerCase();

    // count number of times 1st vowel is in string
    // by manipulating the string
    // get 1st character in string and check it against all vowels

    let firstChar = string[0];

    if(VOWELS.indexOf(firstChar) !== -1) count++;

    // stop if string length === 1
    if(string.length === 1){
        return count;

    } else {

        // pass string without the 1st character to the function
        return count + countVowels(string.slice(1));
    }
}