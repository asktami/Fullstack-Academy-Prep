// ### Compare Objects

// Define a function, `compareObjects`, that accepts two objects as arguments.

// `compareObjects` should return true if both objects have exactly the same
// key/value pairs. Otherwise, `compareObjects` should return false. Assume the
// objects are not nested.

// compareObjects({ name: 'nick' }, { name: 'nick' }) // -> true
// compareObjects({ name: 'zeke' }, { name: 'zeke', age: 12 }) // -> false


// YOUR CODE BELOW

// check for same number of keys, if not = false
// check each key against all keys in other object, if value different, false

const compareObjects = (a, b) => {

    if(Object.keys(a).length !== Object.keys(b).length) return false;

    // loop thru the 1st OBJECT
    for (let key in a) {    // loop thru elements in a
         // look for this key in b, with same value
        if(a[key] !== b[key]) return false;
    }

    return true;
}


// ALTERNATIVE
// const compareObjectsALT = (a, b) => {

//     if(Object.keys(a).length !== Object.keys(b).length) return false;

//     // create an ARRAY of the 1st object's keys to loop thru
//     let aKeys = Object.keys(a);

//     for (let i = 0; i < aKeys.length; i++){
//         let currentKey = aKeys[i];

//         if(a[currentKey] !== b[currentKey]) return false;
//     }

//     return true;
// }