// Print Letters in String

let letters = 'abcdefg';

// FOR LOOP
for (let i = 0; i < letters.length; i++) {
    let currentLetter = letters[i];
    console.log('i is:', currentLetter);
}

console.log('doing it backwards');
// init = let i = letters.length-1
// condition = i >= 0
// final = i--

// doing it backwards
for (let i = letters.length-1; i >= 0; i--) {
    let currentLetter = letters[i];
    console.log('i is:', currentLetter);
}

// WHILE LOOP
// init is outside LOOP
// while (condition) {
//  code block
//    ...
//  final
// }
console.log('while loop');
let j = letters.length-1;
while (j >= 0) {
    let currentLetter = letters[j];
    console.log('j is:', currentLetter);
    j--;
}

// CONTINUE keyword 
// will cause the loop to skip to the next iteration
// will not do stuff after CONTINUE

// BREAK keyword
// breaks out of loop permanently
// exits the loop
// if condition will always be true can use a break statement to exit the loop

for (let i = 10; i >=1; i--) {
    if (i===7){
        continue;
    }
    console.log('i is:', i);
}
// output: 10, 9, 8, 6, 5, 4, 3, 2, 1

for (let i = 10; i >=1; i--) {
    if (i===7){
        break;
    }
    console.log('i is:', i);
}
// output: 10, 9, 8