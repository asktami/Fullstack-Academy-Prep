// ### Style Me Pretty

// The code in style-me-pretty.js works! It's passing all of the tests. But it
// isn't formatted correctly. Edit the code to use formatting best practices; make
// sure all of the tests are still passing when you're done.

// YOUR CODE BELOW
function styleMePretty() {
  let truth = '';

  function innerBeauty(count) {
    let result = '';

    while(count > 0) {
      count--;
      if(count===2) {
        result += 'Unformatted code';
      }
    }

    result += ' is difficult to parse';

    return result;
  }

  truth += `${innerBeauty(5)} for humans if not for machines`;

  return truth;
}
