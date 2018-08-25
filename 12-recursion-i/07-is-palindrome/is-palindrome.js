// ### Is Palindrome
// A palindrome is a word that is spelled the same forward and backward. For example, "LEVEL", "RACECAR", and "KAYAK" are all palindromes, while "MOTOR", "RUDDER", and "DOGGED" are NOT palidromes.

// Write a recursive function, isPalindrome, to check if a string is a palindrome or not.

// isPalindrome('Kayak'); // => true
// isPalindrome('NEVERODDOREVEN'); // => true
// isPalindrome('Tacocat'); // => true
// isPalindrome('SELFLESS'); // => false

// YOUR CODE BELOW
function isPalindrome (string){
    // convert to lowerCase()
    string = string.toLowerCase();

    // stop if string.length === 1
    if(string.length === 1) return true;
    

    // compare last element with first element and if the same return TRUE, then pass new string with last and first elements removed to the function 
    if(string[0] === string[string.length-1]){
        return true;
    } else {
        return false;
    }

    // do recursion on rest of string 
    return isPalindrome(string.slice(1,-1));
}


// ALTERNATIVE
function isPalindromeALT (string){
    // convert to lowerCase()
    string = string.toLowerCase();

    // stop if string.length <= 1
    // less than or equal to 1 b/c could be a word with an odd number of letters --> we're always choping off 2 letters, 1st and last

    if(string.length <= 1) return true; 

    // compare last element with first element and if the same return TRUE, then pass new string with last and first elements removed to the function 
    if(string[0] !== string[string.length-1]) return false;

    // do recursion on rest of string 
    return isPalindrome(string.slice(1,-1));
}