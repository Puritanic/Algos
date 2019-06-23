// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n = 100) {
  for (let i = 1; i <= n; i++) {
    // Is the number a multiple of 3 and 5?
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      // Is the number a multiple of 3?
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
function fizzBuzz1(n = 100) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

/* eslint-disable no-nested-ternary */
function fizzBuzzTernary(n = 100) {
  const limitValue = new Array(n);

  //  let's use the 'keys' method and iterate through the array
  for (const element of limitValue.keys()) {
    let printedValue = element + 1; // Javascript arrays are zero-indexed, so we need to add one to the current key

    printedValue =
      printedValue % 15 === 0
        ? "FizzBuzz"
        : printedValue % 5 === 0
        ? "Buzz"
        : printedValue % 3 === 0
        ? "Fizz"
        : printedValue; // This code works, but is a bit silly. I wanted to use ternary operators, and demonstrate that they can be chained together, but it's very ugly.

    console.log(printedValue); // Finally, write out the correct answer
  }
}

module.exports = {
  fizzBuzzTernary,
  fizzBuzz1,
  fizzBuzz
};
