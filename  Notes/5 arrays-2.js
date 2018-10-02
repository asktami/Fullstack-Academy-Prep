// Multi-dimensional Arrays / Nested Arrays

// ********
// .splice(startIndex, NbrOfElementsToDelete) =  insert and/or remove elements from the MIDDLE of an array
let names = ['george', 'john', 'thomas'];

// remove elements
let singleTermPresidens = names.splice(1,1); // ['john']
// and now names = [ 'george', 'thomas' ]

console.log('singleTermPresidens = ', singleTermPresidens);
console.log('names = ', names);

console.clear();


// insert elements in place of removed elements
names = ['george', 'john', 'thomas', 'abe'];
console.log('names = ', names); //  [ 'george', 'john', 'thomas', 'abe' ]  

let removedNames = names.splice(1, 2, 'a', 'b'); 
console.log('removedNames = ', removedNames); // [ 'john', 'thomas' ] = array of removed elements
console.log('names = ', names); // [ 'george', 'a', 'b', 'abe' ]

console.clear();

// INSERT elements in middle of array WITHOUT removing anything
names = ['george', 'john', 'thomas', 'abe'];
let moreNames = names.splice(1, 0, 'x', 'y');

console.log('moreNames = ', moreNames); // [] empty array b/c nothing removed
console.log('names = ', names); // names =  [ 'george', 'x', 'y', 'john', 'thomas', 'abe' ]

console.clear();

// ********
// .join()
// lets you specify a string to join array elements
// doesn't add trailing after last element
// converts an array to a string!

let beatles = ['paul', 'george', 'john', 'ringo', 'paul'];
let sentence  = 'the beatles were ' + beatles.join(', ');
console.log('names = ', sentence);

console.clear();

// ********
//  .concat() = add 2 or more arrays together into a combined array
 let older = ['ringo', 'john'];
 let younger = ['paul', 'george'];
 
 console.log(older + younger); // converts arrays to srings and mashes them together
 // ringo,johnpaul,george 

 console.log(older.concat(younger)); // [ 'ringo', 'john', 'paul', 'george' ] 

 // ********
 // if use .push() you get a multi-dimensional array (vs. concat)
 older.push(younger);
 console.log(older); // [ 'ringo', 'john', [ 'paul', 'george' ] ]

 console.clear();

// ********
// Multi-Dimensional arrays
let relatedThings = [['window', 'macOs'], ['new york', 'chicago']];
console.log(relatedThings.length); // 2

console.log(relatedThings[1]); // [ 'new york', 'chicago' ]
console.log(relatedThings[1][0]); // new york

console.clear();

let rsvpGroups = [['jane', 'mel'], 'jack', ['rohan', 'david', 'meg']];

// list every element from rsvpGroups array
for (let i = 0; i < rsvpGroups.length; i++){

    let element = rsvpGroups[i];

        if( Array.isArray(element) ) {

            for (let j = 0; j < element.length; j++) {
                console.log(element[j]);
            }
        } else {
            console.log(element); // when element is not an array
        }
}


console.clear();

// GRIDS
// nested array to represent a grid, eg: 3 row x 3 column matrix

let grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
];

// get a row
console.log(grid[1]) ;  // 2nd row [ 4, 5, 6 ]

// 2nd column
let hardcode2ndColumn = [
    grid[0][1], 
    grid[1][1],
    grid[2][1]
];

console.log('hardcode2ndColumn = ', hardcode2ndColumn);  // 2nd column [ 2, 5, 8 ] 


// how to get a 2nd column - using for loop
// will work no matter how many rows exist
// hardcode 1 b/c 1 = 2nd column

let secondCol = [];
for (let i = 0; i < grid.length; i++) {
    secondCol.push(grid[i][1]);
}

console.log('secondCol = ', secondCol); // [ 2, 5, 8, 11 ]