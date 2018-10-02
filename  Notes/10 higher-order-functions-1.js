// Higher Order functions

// Passing functions into other functions - callbacks
// functions that take in a function or return a function = higher order functions
// .forEach 

// ex: can push strings, or any value into arrays
// ex: can push functions into an array
// function = a variable that can be passed into other functions 

// 2 ways to write a function 

// declarative
// function myFunc() {
//     console.log('happy');
// }

// ANONYMOUS FUNCTION
// declare a variable, set to an anonymous function 
// like a recipe without a name 

let myFunc = function () {
    console.log('happy');
}

myFunc();   // call the functions the same way, no matter how declared


// How to call functions stored in an array
console.clear();

let myArr  = [];
myArr.push(myFunc);
myArr.push(myFunc);
console.log('myArr: ', myArr); // myArr:  [ [Function: myFunc], [Function: myFunc] ]

for (let i = 0; i < myArr.length; i++){
    let element = myArr[i]; // each element is a function!
    element();  // happy; () => run this function
}


console.clear();
console.log('xxxxxxxxxxxxxxx');

function runFunction(anotherFunction) {
    anotherFunction();  // invoke/run the function passed in
}

// pass myFunc into runFunction
runFunction(myFunc);        // happy

console.clear();
console.log('xxxxxxxxxxxxxxx');
console.log('xxxxxxxxxxxxxxx');

function saysHi(name){
    console.log('Hi', name);
}

function saysBye(name){
    console.log('Bye', name);
}

function callsWithName(name, sayHiOrBye) {
    sayHiOrBye(name);
}

callsWithName('Sadie', saysHi);     // Hi Sadie
callsWithName('Sadie', saysBye);    // Bye Sadie


console.clear();
console.log('xxxxxxxxxxxxxxx');
console.log('xxxxxxxxxxxxxxx');

// ANONYMOUS FUNCTION
function sayToAll(array, func) {
    for (let i = 0; i < array.length; i++) {
        func(array[i]);
    }
}

let group = ['Jane', 'Jill', 'Mike'];

sayToAll(group, function (name) {
    console.log('Hello, ' + name + '!');
});

// Output: 
// Hello, Jane!
// Hello, Jill!
// Hello, Mike!       


console.clear();
console.log('xxxxxxxxxxxxxxx');
console.log('xxxxxxxxxxxxxxx');






// CALCULATOR

let plus = function (num1, num2){
    return num1 + num2;
};

let minus = function (num1, num2) {
    return num1 - num2;
};

let calc = function(num1, operationFunc, num2) {
    return operationFunc(num1, num2);
};

console.log('calc(10, plus, 20 = ', calc(10,plus,20));  // 30
console.log('calc(10, minus, 20 = ', calc(10,minus,20));    //-10


// BUILT IN HIGH ORDER FUNCTION
// .forEach
// a function passed into another function = callback
// .forEach runs a function on each element in an array 
// .forEach is an array method, accepts a callback as its only argument; each element in the array is the 1st element in the callback function, array element index is optional 2nd argument

let bridges = ['Brooklyn', 'London'];

function logUpperCase(string) {
    console.log(string.toUpperCase());
}

// with only 1st argument, aka array element
bridges.forEach(logUpperCase); 

// Output:
// BROOKLYN
// LONDON

// with 1st and 2nd argument (array element and array element index)
function logUpperCaseALT(string, idx) {
    console.log(string.toUpperCase());
    console.log(string, 'is at index', idx);
}

bridges.forEach(logUpperCaseALT); 
// Output:
// BROOKLYN
// Brooklyn is at index 0
// LONDON
// London is at index 1