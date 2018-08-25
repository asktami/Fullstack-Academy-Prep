// ### Tic Tac Toe

// Define an object 'ticTacToe'.

// Follow the test specs to create a 'board' property, 'move' method, and a 'clear'
// method so you can play a game with your partner.

// The 'board' property is a grid of arrays that represents the board, where each
// cell is initiall null.

// The 'move' method is a method that, given a character, rowNum, and colNum, adds
// the character to the correct cell in the board.

// The 'clear' method should reset the board to all nulls.

// To make it easier to play, have your 'move' method console.log() the
// board before the method returns the board.


// YOUR CODE BELOW

let ticTacToeX = {
    board: [
        [null, null, null], 
        [null, null, null], 
        [null, null, null]
    ],

    move: function (character, rowNum, colNum) {
        if(this.board[rowNum][colNum] === null) this.board[rowNum][colNum] = character;
        
        console.log(this.board);
        return this.board;
    },

    clear: function() {
        this.board = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];

        console.log(this.board);
        return this.board;
    }
}




// ALTERNATIVE
// COULD HAVE USED A CLASS
class ticTacToeAlt {
    constructor () {
        this.board = [
        [null, null, null], 
        [null, null, null], 
        [null, null, null],
        ];
    }

    move (character, rowNum, colNum) {
        if(this.board[rowNum][colNum] === null) {
            this.board[rowNum][colNum] = character;
        }

        return this.board;
    }

    clear () {
        this.board = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
        
        return this.board;
    }
}

// final step is to create a variable with the new class
// note create a variable with DIFFERENT name than the class!
let ticTacToe = new ticTacToeAlt();