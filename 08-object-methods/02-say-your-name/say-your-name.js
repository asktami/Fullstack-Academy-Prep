// ### Say Your Name

// Create a new object, `me2`. Expand the `myGreeting` method from me so it accepts
// another object with a name property. The returned greeting should now greet the
// other object by name.

// console.log(me2.name); // 'Tarana'
// console.log(you.name); // 'Alyssa'
// me2.getGreeting(you); // => 'Hi Alyssa, my name is Tarana.'


// YOUR CODE BELOW

// creating the 'anObject' object is NOT needed
let anObject = {
     name: 'Alyssa'
}

// pass the OBJECT to the function
// reference that object's name property

let me2 = {
    name: 'Tarana',
    getGreeting: function(anObject) {
        return `Hi ${anObject.name}, my name is ${this.name}.`;
    }
}