// ### Who's a Special?

// Write a function whosASpecial that takes an array of pets and returns a string confirming what you already knew: all of the pets are very special!
// Feel free to add your own special pets to the array!

// Use .forEach in your answer.


let specialPets = [{
    name: 'Sadie',
    species: 'cat'
  }, {
    name: 'Layla',
    species: 'cat'
  }, {
    name: 'Bogie',
    species: 'dog'
  }
];

// YOUR CODE BELOW
const whosASpecialALT = (arrayOfPets) => {

  let resultArray = [];


  // forEach sends each array element
  // each array element is an Object
  const newFunc = (petObj) => {

    let newString = `${petObj.name} the ${petObj.species} is very special!`;

    resultArray.push(newString);
  }
  
  // pass the new function into .forEach
  // the new function must be defined before its used IF STORING NEW FUNCTION IN A VARIABLE
  arrayOfPets.forEach(newFunc);

  // output a string
  return resultArray.join(' ');
}








// ALTERNATIVE
// without storing functions in variables
function whosASpecialALT2 (arrayOfPets) {

  let resultArray = [];
  
  // pass the new function into .forEach
  // the new function can be defined ANYWHERE if its NOT stored in a variable
  arrayOfPets.forEach(newFunc);


  // forEach sends each array element
  // each array element is an Object
  function newFunc(petObj) {

    let newString = `${petObj.name} the ${petObj.species} is very special!`;

    resultArray.push(newString);
  }

  // output a string
  return resultArray.join(' ');
}





// ALTERNATIVE - using ANONYMOUS FUNCTION
// this means do NOT use a function NAME when passing a new function to .forEach, just pass the "variable" name for the array elements

function whosASpecialALT3 (arrayOfPets) {

  let resultArray = [];
  
  // pass the new function into .forEach
  // the new function can be defined ANYWHERE if its NOT stored in a variable

  arrayOfPets.forEach(function (petObj) {

    let newString = `${petObj.name} the ${petObj.species} is very special!`;

    resultArray.push(newString);
  });

  // output a string
  return resultArray.join(' ');
}


// ALTERNATIVE **********************
// another way to write an ANONYMOUS function
const whosASpecial = (petArr) => {
    
  let results = [];
  
  // have forEach function call another function 
  petArr.forEach((petObj) => {

      results.push(`${petObj.name} the ${petObj.species} is very special!`);
  });
  
  return results.join(' ');
}


// TEST:
// whosASpecial(specialPets);

// Output:
// Sadie the cat is very special! 
// Layla the cat is very special!
// Bogie the dog is very special!