console.clear();

let myArray = ['a', 'b', 'c'];

console.log('myArray =', myArray); // [ 'a', 'b', 'c' ]

console.log('myArray.pop() =', myArray.pop()); // c

let popOff = myArray.pop();
console.log('popOff = ', popOff);   // b

console.log('myArray =', myArray);  // ['a']

console.log('myArray.push(x,y,z) = ', myArray.push('x','y','z'));  // 4

console.log('myArray =', myArray); // ['a', 'x', 'y', 'z']

// ****************************

console.log('myArray.shift() =', myArray.shift());  // a 

let shiftOff = myArray.shift();
console.log('shiftOff =', shiftOff); // x

console.log('myArray =', myArray); // ['y', 'z']

console.log('myArray.unshift(d,e,f) = ', myArray.unshift('d', 'e', 'f')); // 5

console.log('myArray =', myArray); // ['d', 'e', 'f', 'y', 'z'] 

console.log('****************************');
// .SLICE(startIndex, endIndex)
// creates a new array = the part cut out of the the original array
// does NOT change the original array

// copy array
console.log('myArray.slice() =', myArray.slice()) //['d', 'e', 'f', 'y', 'z'] 

console.log('myArray.slice(1) =', myArray.slice(1)); // [e', 'f', 'y', 'z'] 

// create a new array with just part of the original, from index 2 - 4 => f, y
console.log('myArray.slice(2,4) =', myArray.slice(2, 4)); // ['f', 'y'] 

console.log('myArray =', myArray); // ['d', 'e', 'f', 'y', 'z'] 

console.log('****************************');




// .SPLICE(startIndex, NbrOfElementsToDelete, AddElement, AddElement, ...)
// .splice() lets you remove from and/or insert into the the original array

console.log('myArray.splice() = ', myArray.splice());  // [], does NOT change original array
console.log('myArray =', myArray); // ['d', 'e', 'f', 'y', 'z'] 

console.log('myArray.splice(0, 2) = ', myArray.splice(0, 2));  // ['d', 'e'], => new array of removed elements
console.log('myArray =', myArray); // [ 'f', 'y', 'z' ]  => original array changed

console.log('myArray.splice(0, 2, a,b,c) = ', myArray.splice(0, 2, 'a', 'b', 'c'));  // [ 'f', 'y'] => new array of removed elements
console.log('myArray =', myArray); // ['a', 'b', 'c',  'z' ] => original array changed with elements removed/added

let addRemove = myArray.splice(0, 0, 't','u','v'); // 

console.log('addRemove =', addRemove); // [] => because NO elements removed

console.log('myArray =', myArray);  // ['t', 'u', 'v', 'a', 'b', 'c',  'z' ]

addRemove = myArray.splice(6, 1, 'xxx'); 

console.log('addRemove =', addRemove); // ['z']

console.log('myArray =', myArray);  // ['t', 'u', 'v', 'a', 'b', 'c',  'xxx' ]