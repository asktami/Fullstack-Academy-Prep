// Higher Order Functions Part 2
// Returning Functions from Functions
// Closure

console.clear();

function greetMe(){
    console.log('Hi')
}

function getGreetMe () {
    return greetMe; // return a function without calling it!  not greetMe()!

    // if used return greetMe() would get UNDEFINED because greetMe returns nothing
}

let greeter  = getGreetMe();

console.log('typeof greeter: ', typeof greeter);
console.log(greeter);

// CALL THE FUNCTION USING THE VARIABLE
greeter();

// Output:
// typeof greeter: function
// [Function: greetMe]
// Hi


console.clear();


// RETURN AN INNER Functions *******
// define a function inside another function 

function getGreeterX(){
    // we can declare a new inner function and then return it 

    return greetMeX;

    function greetMeX() {
        console.log('Hello Returned Inner Function');
    }

}

let greeterX  = getGreeterX();

console.log('typeof greeterX: ', typeof greeterX);
console.log(greeterX);

// CALL THE FUNCTION USING THE VARIABLE
greeterX(); 

// Output:
// typeof greeterX:  function
// [Function: greetMeX]
// Hello


console.clear();


// with an ANONYMOUS FUNCTION *******
function getGreeterAnon(){

    return function () {
        console.log('Hello Anon');
    }
}

let greeterAnon = getGreeterAnon();

// CALL THE FUNCTION USING THE VARIABLE
greeterAnon();


console.clear();


// RETURN FUNCTION WITH PARAMETERS *******
// shows how closure works

function getGreeterParam(param1){

    return function (param2) {
        console.log('Hello ' + param1 + ' meet ' + param2);
    }
}

let greeterParam = getGreeterParam('Ella'); // param1

// CALL THE FUNCTION USING THE VARIABLE
greeterParam('Io'); // param2
greeterParam('Ava'); // param2

// Output:
// Hello Ella meet Io
// Hello Ella meet Ava


let greeterParamX = getGreeterParam('Jane'); // param1

// CALL THE FUNCTION USING THE VARIABLE
greeterParamX('John'); // param2
greeterParamX('Will'); // param2

// Output:
// Hello Jane meet John
// Hello Jane meet Will


// How SCOPE works with NESTED FUNCTIONS  *******
// variables only available inside  {}
// lower scope can access things from higher scope


// What is CLOSURE  *******
// closure is the fact that an inner function can STILL access values (variables AND parameters) defined in the outer function even after the outer function has stopped running