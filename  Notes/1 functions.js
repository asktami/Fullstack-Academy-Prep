function imAFunction(){
    console.log('hello world');
}

// invoking a function
imAFunction();

// --------------------
// parameters and arguments

function hello(first='', last=''){
    console.log('hello', first , last);
}

hello('tami', 'williams');
hello('john', 'doe');

let thing = 'world';
hello(thing);

hello('', thing);

function plus(a,b){
    let sum = a + b;
    return sum;
}

plus(10,5);
console.log(plus(10,5));

let x = 3 + plus(10,5);
console.log(x);

function multiply(a, b){
    return a * b;
}

let y = multiply(plus(10,5), 2); // 15, 2
console.log(y); // 30

function isEven(number){
    if(number % 2 === 0){
        return true
    } else {
        return false
    }
}

console.log(isEven(5));
console.log(isEven(10));

let num = 10;
if (isEven(num)) {
    console.log(num + ' is even');
} else {
    console.log(num + ' is NOT even');
}


