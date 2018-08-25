// ### Get Longest Name
// Write a function, getLongestName, that takes an object. The object represents a family tree. Return the longest name in the family.

let family = {
  'Beverly Marquez': {
    'Nina Rhone': {
      'William Rhodes': null,
      'Paul Nell': null,
      'Sir Paddington the Fourth, of the county Wilstonshire': null
    }
  }
};
// getLongestName(family); // => 'Sir Paddington the Fourth, of the county Wilstonshire'

// YOUR CODE BELOW
// need to compare object KEYS

function getLongestName(familyObj){
let longestName = '';

    for (let name in familyObj){       // name = key
        if(name.length > longestName.length) longestName =  name;

        if(typeof familyObj[name] === 'object'){     
            // for current key, 
            // if nested VALUE === an object
            // send this VALUE to the function
            // and process nested objects

            let nestedName = getLongestName(familyObj[name]);
            // get the nested names, storing the longest name from the nested objects

            if(nestedName.length > longestName.length)  longestName = nestedName;
        }
    }
    return longestName;
}














// ALTERNATIVE using Object.keys() AND .forEach
function getLongestNameALT(familyObj){

    let longestName = '';
    
    let names = Object.keys(familyObj);

    names.forEach((name) => {
    
        if(name.length > longestName.length) longestName =  name;

        if(familyObj[name]){     // use truthy value
            let nestedName = getLongestName(familyObj[name]);

            if(nestedName.length > longestName.length) longestName = nestedName;
        }
    })
    return longestName;
}