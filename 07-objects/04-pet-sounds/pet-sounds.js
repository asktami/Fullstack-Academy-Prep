// ### Pet Sounds

// Write a function `petSounds` that takes an animal name and a country name.

// Using the globally-defined animalNoises array, `petSounds` should return a
// sentence that explains which sound the animal makes in the given country.

// petSounds('dog', 'Iceland'); // => Dogs in Iceland say Voff voff!
// petSounds('cat', 'Korea'); // => Cats in Korea say Nyaong!


let animalNoises = [
  { 'dog': {
    'America' : 'Woof! Woof!',
    'Germany' : 'Wau Wau!',
    'England' : 'Bow wow!',
    'Uruguay' : 'Jua jua!',
    'Afrikaans' : 'Blaf!',
    'Korea' : 'Mong mong!',
    'Iceland' : 'Voff voff!',
    'Albania' : 'Ham!',
    'Algeria' : 'Ouaf ouaf!'
    }
  },
  { 'cat': {
    'America' : 'Meow',
    'Germany' : 'Miauw!',
    'England' : 'mew mew',
    'Uruguay' : 'Miau Miau!',
    'Afrikaans' : 'Purr',
    'Korea' : 'Nyaong!',
    'Iceland' : 'Kurnau!',
    'Albania' : 'Miau',
    'Algeria' : 'Miaou!'
    }
  },
  { 'chicken': {
    'America' : 'Cluck cluck',
    'Germany' : 'tock tock tock',
    'England' : 'Cluck Cluck',
    'Uruguay' : 'gut gut gdak',
    'Afrikaans' : 'kukeleku',
    'Korea' : 'ko-ko-ko',
    'Iceland' : 'Chuck-chuck!',
    'Albania' : 'Kotkot',
    'Algeria' : 'Cotcotcodet'
    }
  }
];

// YOUR CODE BELOW
const petSounds = (animal, country) => {

  let animalPlural = animal[0].toUpperCase() + animal.slice(1) + 's';

  // loop thru ARRAY animalNoises
  for (let i = 0; i < animalNoises.length; i++) {   // array

      let animalObj = animalNoises[i];             // object
      let countrySoundsObj = animalObj[animal];   // object

      if(countrySoundsObj) {

      //  if(animal in animalObj) { // ALTERNATIVE
      //  let countrySoundsObj = animalObj[animal];   // object
      // return animalPlural + ' in ' + country + ' say ' + countrySoundsObj[country];

        let sound = countrySoundsObj[country];
        
        return `${animalPlural} in ${country} say ${sound}`;
      }
  }
}