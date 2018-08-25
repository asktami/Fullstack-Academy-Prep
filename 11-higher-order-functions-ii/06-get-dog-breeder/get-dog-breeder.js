// ### Get Dog Breeder

// Remember the dog breeder question from an earlier workshop? It assumed that the default name for a dog should be 'Steve', and the default age should be 0.

// Define a function, getDogBreeder, that takes a default name and age, and returns a dogBreeder function. The returned dogBreeder function should use the default values defined when dogBreeder was called.

// You can copy over the solution code from dogBreeder if you'd like.

// let puppyFarm = getDogBreeder('Snoopy', 0);
// let rescueShelter = getDogBreeder('Odie', 3);

// puppyFarm('Olaf', 3);    // => {name: 'Olaf', age: 3};
// puppyFarm(2);            // => {name: 'Snoopy', age: 2}

// rescueShelter();         // => {'Odie', 3}


// YOUR CODE BELOW
// defaults are set in the OUTER function
function getDogBreeder (defaultName = 'Steve', defaultAge = 0) {

    return dogBreeder;

    // default name and age are SAME as parent function
    function dogBreeder(nameOrAge = defaultName, age = defaultAge){

        // both OUTER function default params are sent to inner function

        // if only 1 param passed to INNER function it will be seen as name instead of age AND overwrite the existing default name value from the OUTER function, so must use conditional below:
        
        if(typeof nameOrAge === 'number') {
            age =  nameOrAge;
            nameOrAge = defaultName;
        } 
        
        let resultObj = {
            name: nameOrAge,
            age: age
        };

        return resultObj;
    }
}