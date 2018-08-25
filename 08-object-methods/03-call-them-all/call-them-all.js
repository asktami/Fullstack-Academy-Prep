// ### Call Them All

// Write a function `callThemAll`, that, given an object and a value, calls every
// method in the object, passing in the value as the argument with each call.

// `callThemAll` should return an array with all of the returned values from each
// method invocation. The order of the elements in the returned array does not
// matter.

// callThemAll(addsNums, 100); // => [110, 120]

let addsNums = {
  addTen: function(num) {
    return num + 10;
  },
  addTwenty: function(num) {
    return num + 20;
  },
  someProperty: 'value'
};

// YOUR CODE BELOW
const callThemAllX = (anObject, value) => {

    let returnArray = [];
    // call every method in the object
    // passing in the value as the argument with each call
    // return an array with all of the returned values from each method
    // returns an array with one element for each method in the object
    // returns ignores properties in the object

    for (let key in anObject) {

        let objVal = anObject[key];

        if(typeof objVal === 'function'){
            returnArray.push(objVal(value));
        }
    }

    return returnArray;
}







// ALTERNATIVE
const callThemAll = (anObject, value) => {

    let returnArray = [];

    let objectValues = Object.values(anObject);

    for (let i = 0 ; i < objectValues.length; i++) {

        let currentValOrFunc = objectValues[i];

        if(typeof currentValOrFunc === 'function'){

            let resultOfFunc = currentValOrFunc(value);
            returnArray.push(resultOfFunc);
        }
    }
    return returnArray;
}