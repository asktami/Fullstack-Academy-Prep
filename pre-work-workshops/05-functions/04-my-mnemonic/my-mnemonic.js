// ### My Mnemonic

// Write a function `myMnemonic` that accepts up to four strings. `myMnemonic`
// should return a new string of the first characters for each string argument.

// Note that the user may not pass in all four strings!

// myMnemonic('Must', 'Accept', 'Sugar', 'Happiness'); // => MASH
// myMnemonic('We', 'Eat', 'Eggs'); // => WEE

// YOUR CODE BELOW
// ALTERNATIVE:
// function myMnemonic(a = '', b = '', c = '', d = '') {
//   let final = '';
//   if (a[0] != undefined) {
//     final += a[0];
//   }
//   if (b[0] != undefined) {
//     final += b[0];
//   }
//   if (c[0] != undefined) {
//     final += c[0];
//   }
//   if (d[0] != undefined) {
//     final += d[0];
//   }
//   return final;
// }


// ALTERNATIVE:
// const myMnemonic = (a = '', b = '', c = '', d = '') => {
//   let final = '';
//   if (a[0] != undefined) final += a[0];
//   if (b[0] != undefined) final += b[0];
//   if (c[0] != undefined) final += c[0];
//   if (d[0] != undefined) final += d[0];
//   return final;
// };



// FINAL:
// Rest Operator = turning all arguments coming into this function into an array
const myMnemonic = (...words) => {
  let final = '';
  for (let i = 0; i < words.length; ++i) {
    const currentWord = words[i];
    const currentCharacter = currentWord[0];
    final += currentCharacter;

    console.log('i = ' + i);
    console.log('currentWord = ' + currentWord);
    console.log('currentCharacter = ' + currentCharacter);
    console.log('final = ' + final);
  }
  return final;
};

console.log(myMnemonic('Must', 'Accept', 'Sugar', 'Happiness'));
console.log(myMnemonic('We', 'Eat', 'Eggs'));
