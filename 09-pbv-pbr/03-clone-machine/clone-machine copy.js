// ### Clone Machine
// Write a function `cloneMachine`, that, given an animmal (represented as an object), returns a clone of the original animal.

// The name of the clone should be the name of its parent, concatenated with the word 'Clone'.

// `cloneMachine` should also push the name of the clone to the parent's offspring array.


let dolly = {
  name: 'Dolly',
  species: 'sheep',
  offspring: []
}

// let dollyClone = cloneMachine(dolly);

// console.log(dollyClone) // {name: 'DollyClone', species: 'sheep', offspring: []}

// console.log(dolly) // {name: 'Dolly', species: 'sheep', offspring: ['DollyClone']}

// YOUR CODE BELOW
const cloneMachine = (animalObj) => {
  let clonedAnimal = {};

  let cloneName = animalObj.parent + 'Clone';

  clonedAnimal.name = cloneName;
  clonedAnimal.species = animalObj.species;
  clonedAnimal.offspring = [];

  animalObj.offspring.push(cloneName);

  return clonedAnimal;
}


// ALTERNATIVE
const cloneMachineALT = (animalObj) => {

  let clonedAnimal = {};

  // create new clone by iterating thru animalObj
  for (let key in animalObj) {
    clonedAnimal[key] = animalObj[key];
  }

  // change clonedAnmial name
  clonedAnimal.name = clonedAnimal.name + 'Clone';

  // change clonedAnimal offspring to NOT be tied to original
  clonedAnimal.offspring = [];

  // change original offspring
  animalObj.offspring.push(clonedAnimal.name);

  return clonedAnimal;

}