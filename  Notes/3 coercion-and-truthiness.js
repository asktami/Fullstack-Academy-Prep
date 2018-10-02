// Explicit coercion,I change the type
// Implicit coercion, JS changes the type

// Explicit coercion
console.clear();
console.log('xxxxxxx');

// // number to string
let num = 10;
console.log('num = ', num);
console.log(typeof num);

let numStr = String(num);
console.log('numStr = ', numStr);
console.log(typeof numStr);

// string to number
let str = '1000';
console.log('str = ', str);
console.log(typeof str);

let strNum = Number(str);
console.log('strNum = ', strNum);
console.log(typeof strNum);


console.clear();
console.log('xxxxxxx');

// ----------------------
// Implicit coercion
// anything + any string  = string

console.clear();
console.log('xxxxxxx');

let sum = 10 + 20;
console.log('concatSum = ', sum);
console.log('concatSum = ', typeof sum);

let concatSum = '10' + '20';
console.log('concatSum = ', concatSum);
console.log('concatSum = ', typeof concatSum);

let notSure = 10 + '30';
console.log('notSure = ', notSure);
console.log('notSure = ', typeof notSure);

console.clear();
console.log('xxxxxxx');

// ----------------------
// Truthiness
// do NOT use == (loose equality operator)
// instead use ===
console.log('10' == 10); // true
console.log('10' == 10); // true
console.log(true == 'true'); // false
console.log('' == false);   // true
console.log('1' == true);   // true

let newBool = Boolean('a string');
console.log('newBool = ' , newBool); // true

console.clear();
console.log('xxxxxxx');

// truthy and falsey
// examples of truthy values
// values that act true when converted to Boolean
console.log(Boolean('normal string')); // true
console.log(Boolean(10)); // true
console.log(Boolean([2,3,4])); // true
console.log(Boolean({name:'tami'})); // true

console.clear();
console.log('xxxxxxx');

// examples of falsey values
console.log(Boolean('')); // false
console.log(Boolean(0)); // false
console.log(Boolean(99)); // true
console.log(Boolean(-5)); // true

console.clear();
console.log('xxxxxxx');

console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false


console.clear();
console.log('xxxxxxx');

if ('string') {
    console.log('is truthy');   // truthy
} else {
    console.log('is falsey');
}

if (10) {
    console.log('is truthy');   // truthy
} else {
    console.log('is falsey');
}

if (0) {
    console.log('is truthy');  
} else {
    console.log('is falsey');    // falsey
}


if ('') {
    console.log('is truthy');  
} else {
    console.log('is falsey');    // falsey
}


console.clear();
console.log('xxxxxxx');

console.log(!true); // false
console.log(!'hello'); // false
console.log(!''); // true
console.log(!0); // true
console.log(![]); // false
console.log(!{}); // false

// using the double bang (!!) will give you the truthiness of a variables
console.log(!![]); // true
console.log(!!'is this truthy'); // true
console.log(!!0); // false


console.clear();
console.log('xxxxxxx');


// Logical Operators
// && and ||


if( !!x == true){
    return 'true';
    console.log('true');
}  else {
    console.log('false');
}

console.log('here');