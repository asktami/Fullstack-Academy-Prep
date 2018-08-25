// reverse string with recursion
// stop when string length = 1
// otherwise take character at end and move to begining
// pattern is last character + all other char - last character

const myReverse = (string) => {
    if(string.length === 1){
        let result = string;
        return result;
    }

    let lastChar = string.slice(-1);
    
    let result = lastChar + myReverse(string.slice(0,-1));

    return result;
}

let test = myReverse('abc');
console.log('test: ', test);
