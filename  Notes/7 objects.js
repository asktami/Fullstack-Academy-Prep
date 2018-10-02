console.clear();

// an object is a collection of key-value pairs
// instead of number indexes starting at 0, objects use string indexes called "keys"
// like an associative array
// created with curly bracket {}
// arrays are in ORDER, objects are NOT

let myArray = ['val1', 'val2']

let myObject = {
    'key1': 'value1',
    'key2': 'value2',
}

console.log(myArray[0]);        // val1
console.log(myObject['key1']);  // value1

console.log(typeof []);     // object for arrays
console.log(typeof {});     // object for objects

let pusheen = {
    name: 'Pusheen',      // if key is just one work you can omit the ''
    age: 7,
    'color': 'grey',
    'cat sound': 'meow',    // if the key has spaces MUST use ''
    owner: 'Meg',
};

console.log(pusheen['name']);   // Pusheen
console.log(pusheen['age']);    // 7
console.log(pusheen['color']);  // grey
console.log(pusheen['cat sound']);  // grey

console.log(typeof pusheen['xxx']);    // undefined
//  console.log(typeof pusheen[xxx]);    // xxx is not defined


// ************************
// DOT NOTATION

console.log(pusheen.name);          // Pusheen
console.log(pusheen.age);          // 7
console.log(pusheen['cat sound']); // must use brackets b/c key has space

console.log(pusheen['cat' + ' ' + 'sound']);  // meow

// ************************
// CHANGE EXISTING ELEMENT in object

console.log('xxxxxxxxxxx') ;
console.log(pusheen);  

pusheen['owner'] = 'Abby';
console.log(pusheen);  

pusheen.owner = 'Tami';
pusheen.age++;  // increment age by 1

console.log(pusheen);  

// ************************
// REMOVE ELEMENT from object
// delete objectName['key'] or delete objectName.key

delete pusheen['cat sound'];    // works for bracket notation
console.log(pusheen); 

delete pusheen.owner;   // works for dot notation
console.log(pusheen); 


// ************************
// CHECK ELEMENT exists in object, look for key
// IN operator
// if ('key' in objectName) 

if('age' in pusheen) {
    console.log('Pusheen age is', pusheen.age);
} else {
    console.log('Pusheen age is', pusheen.agex);    // pusheen.agex => undefined
}

console.clear();

// ************************
// FOR...IN LOOP
// for (let key in objectName) {}

// When iterate thru object NO guaranee you get element is the order you expect
// for...in loop used to loop over objects

for (let key in pusheen) {
    // the value of the variable key will change to each of the keys in the pusheen object
    
    // to print out the KEYS from this object
    console.log(key);

    // to print out the VALUES from this object
    console.log(pusheen[key]);
}

for (let key in pusheen) {
    console.log(key + ' = ' + pusheen[key]);    // use bracket notation for value
}

// ************************
// GET ALL KEYS WITHOUT a for...in loop
// Object.keys(objectName)

console.log(Object.keys(pusheen));   // output is an array with the keys

let keys = Object.keys(pusheen);
for (let i = 0; i < keys.length; i++){
    console.log(pusheen[keys[i]]);  //output values
}

for (let i = 0; i < keys.length; i++){
    console.log(keys[i] + ' = ' + pusheen[keys[i]]);  //output key = value
}

console.clear();

// ************************
// PUT data structures into object
// nested arrays and objects inside an object

let pusheenALT = {
    name: 'Pusheen',
    age: 7,
    'color': ['grey', 'white'],
    siblings: { sister: 'Stormy', brother: 'Pip'},  // an object inside an object
    'cat sound': 'meow',
    owner: 'Meg',
};

console.log(pusheenALT.color[0]);  // grey

console.log(pusheenALT.siblings.sister);        // Stormy
console.log(pusheenALT['siblings']['sister']);  // Stormy

console.clear();

// Object.entries

console.log('pusheen = ', pusheen);  
// { name: 'Pusheen', age: 8, color: 'grey' }

console.log('pusheen object.entries = ', Object.entries(pusheen));  
// [ [ 'name', 'Pusheen' ], [ 'age', 8 ], [ 'color', 'grey' ] ]