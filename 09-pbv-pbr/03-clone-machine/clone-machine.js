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

    let clone = {};

    // 1st create a copy
    // iterate thru original object
    for (let key in animalObj ) {
        clone[key] = animalObj[key];
    }

    // in the copy change the name
    clone.name = clone.name + 'Clone';
    clone.offspring = [];

    // 2nd change the original object
    animalObj.offspring.push(clone.name);

    return clone;
}









// ALTERNATIVE
// using SPREAD - spreading out keys in object
const cloneMachineALT = ({name, species, offspring}) => {

    const clonedName = `${name}Clone`;

    const clonedAnmial = {
        name: clonedName,
        species: species,
        offspring: []

    };

    offspring.push(clonedName);

    return clonedAnmial;
}