console.log('\x1Bc'); // clear console
console.clear();

let names = ['george', 'john', 'scott'];
console.log(names);
console.log(typeof names);  // object

// Array.isArray, a function, to check if variable is an array
console.log(Array.isArray(names));  // true
console.log(names.isArray); // undefined
console.log(Array.isArray('hello'));  // false

// Bracket Access
// index = number in the []
// index = position of values in the array
// elements start at 0
// .length = a property
console.log(names[1]); // john, 2nd element
console.log(names[0]); // george, 1st element
console.log('last = ' , names[names.length-1]); // scott, last element
console.log('length = ' , names.length); // 3, number of elements in array

// CHANGE element values in array
names[0] = 'David';
console.log(names); // David, 1st element


// ***********
// .push() method to ADD element to the END of the Array
names.push('tami');
console.log(names);


// ***********
// .pop() method to REMOVE and return the LAST element added to the Array
let lastElementAdded = names.pop();
console.log('lastElementAdded, now removed = ' , lastElementAdded);




// ***********
// .shift() method to REMOVE the FIRST element in the Array
console.log('names = ' , names);
let firstElementRemoved = names.shift();

console.log('firstElementRemoved = ' , firstElementRemoved);
console.log('names = ' , names);


// ***********
// .unshift() method to ADD the START of the Array
let newElementAtStart = names.unshift('jane'); 
// newElementAtStart = length of array + adds element to start of array

console.log('newElementAtStart = ' , newElementAtStart);
console.log('names = ' , names);


// ***********
// .indexOf() method
// if something found, will return the index
// if something NOT found will return -1
console.log(names.indexOf('john')); // 1 = index of element
console.log(names[1]); // john

console.log('xxxxxxxx');
console.log('includes james =', names.indexOf('james')); // -1, not found
console.log('includes john =', names.indexOf('john')); // 1, found
console.log('includes John =', names.indexOf('John')); // -1, not found, case-sensitive

let person = 'James';
if(names.indexOf(person) > -1) {
    console.log(person, 'found') ;
} else {
    console.log(person, 'not found');
}





// ***********
// .includes() method, returns TRUE or FALSE
// another way to check if something is in the array
console.log('xxxxxxxx');
console.log('includes james =', names.includes('james')); // false, not found
console.log('includes john =', names.includes('john')); // true, found
console.log('includes John =', names.includes('John')); // false, not found, case-sensitive
console.log('xxxxxxxx');


// ***********
// .slice() extracts a portion of the array; makes a new array
console.log('names = ' , names); //   'jane', 'john', 'scott' ]
console.log(names.slice(0,2));  // get elements at start index to right before end index
console.log('slice 0,1 = ', names.slice(0,1)); // [ 'jane' ]
console.log('slice 0,2 = ', names.slice(0,2)); // [ 'jane', 'john' ]
console.log('slice 1,2 = ', names.slice(1,2)); // [ 'john' ]
console.log('slice 1,3 = ', names.slice(1,3)); //  [ 'john', 'scott' ]

// if pass in 1 value
console.log(names.slice(1));    // return everything from index 1 to the end: [ 'john', 'scott' ], aka chops off 1st element

// if pass in nothing, slice creates a brand new copy of entire array
let namesCopy= names.slice(); 
namesCopy[0] = 'kate';
console.log('names = ' , names);
console.log('namesCopy = ' , namesCopy);


// ***********
// .reverse() method
console.log('names = ' , names);
names.reverse();    // does not return anything, reverses in-place
console.log('names reversed = ' , names);