// ### All Systems Go

// You are working for NASA because you are super cool! It's up to you to write the code that will determine if "all systems are go for launch". Your function will receive a deeply nested object. Keys represent the NAME of a system on the spacecraft; VALUES are boolean "true" if the system is "go" for launch and "false" otherwise. Your function should return "true" only if every system is "go" for launch!

// let systems = {
//   power: {
//     batteries: true,
//     solarCells: true,
//     generator: true,
//     fuelCells: true
//   },
//   telecoms: {
//     antennas: {
//       highGain: true,
//       mediumGain: true,
//       lowGain: true
//     },
//     transmitter: true,
//     receiver: true
//   },
//   attitudeControl: {
//     stabilization: {
//       spin: true,
//       threeAxis: true
//     }
//   },
//   propulsion: {
//     engines: {
//       engine1: true,
//       engine2: true,
//       engine3: false
//     },
//     thrusters: true,
//     propellant: true
//   },
//   environment: {
//     cooling: true,
//     heating: true,
//     lifeSupport: true
//   }
// };

// allSystemsGo(systems); // => false

// YOUR CODE BELOW
// loop thru all VALUES in nested object
// if any value === false, return false



function allSystemsGo(obj){

    for (let key in obj){
        let value = obj[key];

        if(typeof value === 'object'){
            
            let checkAll = allSystemsGo(value);     // get result from nested object - true or false

            if(checkAll !== true) return false;

        } else {
            if(value !== true) return false;
        }
    }
    return true;
}


// ALTERNATIVE using .every
function allSystemsGoALT(obj){
    
    let currentSystemValues = Object.values(obj);

    return currentSystemValues.every((element) => {

        if(typeof element === 'object')return allSystemsGo(element);
        else return element;    
        // return element b/c element value = boolean, if false it will force .every to fail
    })
}