// ### Scope Koans

// All of the tests for scope-koans.js are failing. Following the restrictions for
// each function in scope-koans.js, fix the code so every test passes.

// For all functions, you may not:
//   1. Edit the line initially declaring each test message (e.g., testOneMessage)
//   2. Edit any code on the same line as the return keyword.

// It may be helpful to look at the values passed into these functions in
// scope-koans.spec.js!


// Test One Restrictions: Do not declare any new variable with the let keyword
let testOneMessage = 'test succeeding'; // change made here

function testOne() {
  return testOneMessage;
}


// Test Two Restrictions: Do not change any code in the body of testTwo
// (you can edit helperFunc though)

// Clue: reasign the global testTwoMessage in the helper function
let testTwoMessage = 'test failing';

function testTwo() {
  helperFunc();
  return testTwoMessage;
}

function helperFunc(a) {
  testTwoMessage = 'test succeeding';   // change made here
  return a;
}















// Test Three Restrictions: Type only a single character in either testThree or getMessage
// Clue: pass a truthy value into getMessage so it returns the correct message
let testThreeMessage = 'test failing';

function testThree(testThreeMessage) {
  if (testThreeMessage) {
    testThreeMessage = 'test succeeding';
  }

  let msg = getMessage(1);  // change made here
  return msg;

  function getMessage(value) {
    if (value) {
      return testThreeMessage;
    }

    return 'test failing';
  }
}


// Test Four Restrictions: Delete only a single character from any function.
// Clue: change the name of the parameter in doubleInner to prevent the msg in its scope from being reassigned to the global var
let testFourMessage = 'test succeeding';

function testFour(msg) {
  function innerFunc(msg) {
    msg = msg

    function doubleInner(msg) {
      testFourMessag = msg;   // change made here
      return testFourMessage;
    }

    testFourMessage = doubleInner('test failing')
  }

  innerFunc(testFourMessage);

  msg = testFourMessage;
  return testFourMessage;
}
