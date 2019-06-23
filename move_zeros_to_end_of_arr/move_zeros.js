// Write a function that takes in an array of integers and moves all of the
// zeros to the end of the array, with no concern regarding the order of
// non-zero elements. E.g.:
// [1, 2, 0, 3, 4, 0, 5, 6, 0]) => [1, 2, 6, 3, 4, 5, 0, 0, 0]
// The function should run in linear time/O(n) and use constant/O(1) space.

/* eslint-disable no-param-reassign */
const moveZerosToEnd = array => {
  let beginning = 0;
  let end = array.length - 1;

  while (beginning !== end) {
    while (array[beginning] !== 0 && beginning !== end) {
      beginning += 1;
    }
    while (array[end] === 0 && beginning !== end) {
      end -= 1;
    }
    // const tempSwapValue = array[end];
    // array[end] = array[beginning];
    // array[beginning] = tempSwapValue;

    [array[end], array[beginning]] = [array[beginning], array[end]];
  }

  return array;
};

// O(N^2) time
const moveZeroes1 = arr => {
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i] === 0) {
      const temp = arr.splice(i, 1);
      arr.push(temp[0]);
    }
  }

  return arr;
};

// O(N) time
const moveZeroes2 = arr => {
  let count = 0;

  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i] !== 0) {
      arr[count] = arr[i];
      count++;
    }
  }

  for (; count < arr.length; count++) {
    arr[count] = 0;
  }

  return arr;
};

module.exports = { moveZerosToEnd, moveZeroes1, moveZeroes2 };
