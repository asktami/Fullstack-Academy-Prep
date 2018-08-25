// ### Make Grid

// Write a function `makeGrid` that accepts two arguments:
// 1. numColumns (number)
// 2. numRows (number)

// `makeGrid` should return a two-dimensional array that represents a grid of the
// given dimensions.

// makeGrid(3,4);
// /* => [[1, 2, 3],
//        [1, 2, 3],
//        [1, 2, 3],
//        [1, 2, 3]]
// */



// YOUR CODE BELOW
const makeGrid = (numColumns, numRows) => {
    let grid = [] ;

    // make rows
    for (let i = 0 ; i < numRows ; i++) {
        let row = [];

        // make columns 
        for (let j = 1 ; j <= numColumns ; j++) {
            row.push(j);
        }

        grid.push(row);
    }

    return grid;
}









// ALTERNATIVE
// helper function that makes rows
const makeGridALT = (numColumns, numRows) => {

    const makeRow = () => {
        let row = [];

        // make columns
        for (let j = 1 ; j <= numColumns ; j++) {
            row.push(j);
        }

        return row;
    }

    let grid = [];
    
     // make rows
     for (let i = 0; i < numRows ; i++) {
        grid.push( makeRow() );
    }

    return grid;
}
