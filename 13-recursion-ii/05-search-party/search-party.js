// ### Search Party
// Write a function, searchParty, that accepts a name and a world object. The KEYS in the world objects describe a LOCATION. The VALUES can be any combination of strings, arrays, or other objects.

// Search through the whole world for the given name. Return an array with directions to the person if you find them. Return null if you can't find them.

let world = {
  'Fullstack': {
    '11th floor': 'Marge',
    '25th floor': 'Francis'
  },
  'Subway': ['Jackie', 'Grumio']
};
// searchParty('Francis', world); // => ['Fullstack', '25th floor']
// searchParty('Franco', world); // => null

// YOUR CODE BELOW
const searchParty = (name, world) => {

    // grab names of all places in world
    // ex: Fullstack, Subway, then '11th floor' and '25th floor'
    const places = Object.keys(world);              

    // iterate through those places
    for (let i = 0; i < places.length; i++){
    
        const place = places[i];
   		// ex: Fullstack, then '11th floor', etc.

        const nextVal = world[place];   
        // store the value at that location
        // ex: string/object/array
        // ex: the object value tied to Fullstack
        // then, Marge, etc.          


        if(nextVal === name){    
        // handle strings, return key                   
            return [place];                         


        } else if (Array.isArray(nextVal)){      
        // handle arrays, return key    
            
            // find name in the array
            // const isInArray = nextVal.some(person => person === name);
            if(nextVal.includes(name))return [place];




        } else if(typeof nextVal === 'object'){
        // handle objects - do RECURSION   

            const inNextLocation = searchParty(name, nextVal);

            // if name is in sub-location, add on their location to the current location to get the full address
            if(inNextLocation) return [place].concat(inNextLocation);
        }
    }




    // if we could not find the person
    return null;
}