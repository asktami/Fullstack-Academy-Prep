// ### Count To Ten

// Write a function, countToTen, that receives a number less than or equal to 10. 

// countToTen should console.log every number between the given number and 10, including 10. Use recursion.

// NOTE: The test for this function checks how many times you call console.log. If you use console.log for debugging purposes, that's great! But your test will likely  fail, so comment out your console.logs when you want to see if you're passing  the test!

// countToTen(1);
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10


// YOUR CODE BELOW
// count from 1 to num

function countToTen(num) {

    // stop when num ==== 10;
    if( num === 10){
        console.log(num);
    } else {

    // console.log num
    console.log(num);

    // do recusion of num + 1
    countToTen(num + 1);
    }
}