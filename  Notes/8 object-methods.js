// What is a method
// arrayName.indexOf() => a method for array objects

// Objects can hold any type of value including functions!!!
// can NOT use arrow functions inside of objects!

let generic = {
    first: 'grace',
    last: 'hopper',
    rank: 'rear admiral',
    myMethod: function() {
        console.log('I am from a method!');
    }
}
generic.myMethod(); // I am from a method!

let graceHopper1 = {
    first: 'grace',
    last: 'hopper',
    rank: 'rear admiral',
    sayQuote: function() {
        console.log('easier to ask forgiveness than get permission!');
    }
}
graceHopper1.sayQuote(); // I am from a method!easier to ask forgiveness than get permission!

let graceHopper = {
    first: 'grace',
    last: 'hopper',
    rank: 'rear admiral',
    sayQuote: function() {
        console.log('easier to ask forgiveness than get permission!');
    },
    getAge: function(year){
        return year - 1906;
    },
    greet: function(name){
        console.log('Hello ' + name + '! My name is ' + this.first);    // gets graceHopper first value
    }
}

console.log(graceHopper.getAge(2018));  // 112

graceHopper.greet('Tami');  // Hello Tami! My name is grace

console.clear();

// create a calculator object
let calc = {
    total: 0,
    plus: function(num) {
        this.total += num;
        return this.total;
    },
    minus: function(num){
        this.total -= num;
        return this.total;
    },
    divide: function(num){
        this.total /= num;
        return this.total;
    },
    print: function(){
        console.log('this total = ' + this.total);
    }
}

console.log(calc.total); // 0

calc.plus(5);
console.log(calc.total); // 5

calc.plus(5);
console.log(calc.total); // 10

calc.minus(3);
console.log(calc.total); // 7

calc.plus(3);
console.log(calc.total); // 10

calc.divide(5);
console.log(calc.total); // 2

calc.print();