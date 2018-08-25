// ### Remove Columns

// Write a function `removeColumns` that accepts two arguments
// 1. originalGrid (two-dimensional array)
// 2. numColums (number)

// `removeColumns` should return a new grid with the correct number of columns removed.


// removeColumns([[1, 2, 3],
//                [1, 2, 3],
//                [1, 2, 3],
//                [1, 2, 3]], 2);
// /* => [[1],
//        [1],
//        [1],
//        [1]]

// YOUR CODE BELOW
// .SPLICE(startIndex, NbrOfElementsToDelete, AddElement, AddElement, ...)


const removeColumnsAlt1 = (originalGrid, numColums) => {
    let removedGrid = originalGrid.slice();   // copy originalGrid

    for (i = 0 ; i < removedGrid.length; i++) {
        let row = removedGrid[i];

        // row.length - numColums to delete = final row Length
        // startIndx = 3 - 2 = 1
        // row.splice(startIndx, numColums)

        let startIndx = row.length -  numColums;
        row.splice(startIndx, numColums);
    }

    return removedGrid;
}




// ALTERNATIVE
// .pop =  REMOVE AND RETURN the LAST element added to the array
const removeColumnsAlt2 = (originalGrid, numColums) => {

    for (i = 0 ; i < originalGrid.length; i++) {

        let row = originalGrid[i];

        // loop thru every element (column)
        for ( let j = 0; j < numColums; j++) {

            // remove one element off the current row
            row.pop();
        } 
    }

    return originalGrid;
}




// ALTERNATIVE
// using .slice(startIndex, endIndex)
const removeColumns = (originalGrid, numColums) => {
    let removedGrid = [];

    for (i = 0 ; i < originalGrid.length; i++) {

        let row = originalGrid[i];
        removedGrid.push(row.slice(0, row.length -  numColums));
    }

    return removedGrid;
}