// ### Zoo Inventory

// Define a function, `zooInventory`, that accepts a multi-dimensional array of
// animal facts.

// `zooInventory` should return a new, flat array. Each element in the new array
// should be a sentence about each of the animals in the zoo.

// let myZoo = [
//   ['King Kong', ['gorilla', 42]],
//   ['Nemo', ['fish', 5]],
//   ['Punxsutawney Phil', ['groundhog', 11]]
// ];

// zooInventory(myZoo);
// /* => ['King Kong the gorilla is 42.',
//        'Nemo the fish is 5.'
//        'Punxsutawney Phil the groundhog is 11.']


// YOUR CODE BELOW
// const zooInventoryALT = (animalFacts) => {
//     let flatArray = [];

//     for (let i = 0 ; i < animalFacts.length ; i++ ) {   // loop thru entire array

//         let element = animalFacts[i];   

//         if ( Array.isArray(element) ) { // current animal, ['King Kong', ['gorilla', 42]],
        
//         let sentence = [];

//             for (let j = 0 ; j < element.length ; j++ ) {   
               
//                 let innerElement = element[j];  

//                 if ( Array.isArray(innerElement) ) {        
                    
//                     let fragment = innerElement.join(' is ') + '.'; // a string
//                     sentence.push(fragment);  // ['gorilla', 42]
                    
//                 }  else {

//                     sentence.push(innerElement + ' the');  // 'King Kong'
//                 }
//             }
//             flatArray.push(sentence.join(' '));
//         }
//     }
//     return flatArray;
// }






// ALTERNATIVE using indexes
const zooInventoryALT = (zoo) => {
    debugger;
    let sentences = [];

    for (let i = 0 ; i < zoo.length ; i++ ) {   

        let animal = zoo[i][0];
        let species = zoo[i][1][0];
        let age = zoo[i][1][1];
        let sentence = animal + ' the ' + species + ' is ' + age + '.';
        sentences.push(sentence);
    }

    return sentences;
}










// ALTERNATIVE
const zooInventory = (zoo) => {
    let sentences = [];

    for (let i = 0 ; i < zoo.length ; i++ ) {   

    const [animal, [species, age]] = zoo[i];        // using spreading = assigning names to elements
        
    sentences.push(`${animal} the ${species} is ${age}.`);
    }

    return sentences;
}
