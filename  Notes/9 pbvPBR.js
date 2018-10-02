// Pass by Value vs. Pass by Reference

// Pass by Value: primitive values
// Pass by Reference: complex values

// - when you assign a primitive value to a variable the variable stores a COPY of that value

// - when you assign a complex value to a variable the variable does NOT store a copy, instead it stores a REFERENCE in memory - pointing to the value

// DATA TYPES
// Primitive Values (immutable - once defined can NOT be changed, passed by value):
// string
// number 
// boolean 
// undefined 
// null (typeof is object b/c JS bug!)
// symbol (ES6)

// Complex Values (mutable -once defined can be changed, passed by reference):
// objects
// arrays (typeof object)
// functions  (typeof function)
// dates (typeof object)
// errors (typeof object)

// EXAMPLE of immutable string, let str = 'cat' can not be changed to rat, i.e. with str[0] = r while array arr with elements c, a, t can be changed to elements r, a, t with arr[0] = r)


let first = 20;

let second = first;     // copies the value of first into second
second++;               // only second changes
console.log('first: ', first);      // 20
console.log('second: ', second);    // 21

console.clear();

let firstArr = [10, 20];    //  [10, 20]

let secondArr = firstArr;   // [10, 20], firstArr and secondArr point to SAME value
secondArr.push(30);         // [10, 20, 30]

console.log('firstArr: ', firstArr);    //  [10, 20, 30]
console.log('secondArr: ', secondArr);  //  [10, 20, 30]

let thirdArr = secondArr.slice();   // slice() = COPIES value into a new variable
thirdArr.push(40);

console.log('firstArr: ', firstArr);    //  [10, 20, 30]
console.log('secondArr: ', secondArr);  //  [10, 20, 30]
console.log('thirdArr: ', thirdArr);    //  [10, 20, 30, 40]

console.clear();

let myNum = 10;

function adds20(num) {
    return num += 20;
}
let returnedNum = adds20(myNum);    // passes myNum by VALUE (makes a copy)

console.log('returnedNum: ', returnedNum);  // 30
console.log('myNum: ', myNum);              // 10


console.clear();

let myArray = [10];

function pushes20(array) {
     array.push(20);
     return array;
}
let returnedArray = pushes20(myArray);  // passes myArray by REFERENCE (points to original)

console.log('returnedArray: ', returnedArray);  // [ 10, 20 ]
console.log('myArray: ', myArray);              // [ 10, 20 ]

// *********************
// Equality === operator compares complex values by REFERENCE not by value
let array1 = [1, 2, 3];
let array2 = [1, 2, 3];

console.log(array1 === array2);  // FALSE b/c each REFERENCES A DIFFERENT PLACE IN MEMORY
q
let array3 = array1;
console.log(array1 === array3);  // TRUE b/c each references the SAME place in memory