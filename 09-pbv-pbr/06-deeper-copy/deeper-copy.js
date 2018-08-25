// ### Deeper Copy

// Write a function, deeperCopy, that, unlike .slice, will deeply copy a two- dimensional array.


// let myArray = [1, [2, 3]];

// let copy = deeperCopy(myArray);
// copy[1].push(4);

// console.log(myArray); // [1, [2, 3]]

// let copy2 = myArray.slice();
// copy2[1].push(4);

// console.log(myArray); // [1, [2, 3, 4]]


// MUST COPY ALL ARRAYS, outer and any nested!!!

// YOUR CODE BELOW
const deeperCopy = (anArr) => {
    let copiedArray = [];

    // copy original array to a new array
    for (let i = 0; i < anArr.length; i++ ) {
        
        // check if current element is an array or a primitive
        let currentElement = anArr[i];

        if(Array.isArray(currentElement)) {

        // copy innerArray
        const innerArray = [];

            // handle innerArray array
            for (let j = 0; j < currentElement.length; j++) {
                innerArray.push(currentElement[j]);
            }

            // add innerArray to copied array
            copiedArray.push(innerArray);

        } else {
            copiedArray.push(currentElement);
        }
    }

    return copiedArray;
}