NOTE:
scope = variable value available btw {}



let collision = 'global'
// collision var defined

function outer() {
    // collision var not defined as a variable or parameter

    function inner () {
    // collision var not defined
        console.log(collision)
    }
    inner();
}
outer('outer');

// OUTPUT
// global


function outerX() {
    let outerVar = 'outer';

    function inner(outerVar) {
        // outerVar exists and is undefined
        // so this function does NOT look up into the outer() function for the value of the var outerVar
        let innerVar = 'inner';
        console.log(outerVar, innerVar);
    }
    inner();
}

outerX();    // no value passed
// Output:
// undefined, inner