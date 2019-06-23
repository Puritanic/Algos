// Median of the array is an element which will divide the array into two parts: left and right.
// So the number of elements on the left part will be equal or less to the amount of element on the right part.
// And this is obvious in case we have an array of an odd number of elements, e.g:
//
// Array = [1,2,3,4,5]
//
// In this case, the median of this array is 3, since it divides the array into two parts: [1,2] and [4,5].
//
// But what about even number of elements? Array = [1,2,3,4,5,6].
// In this case we should take average between last element of left part and first element of the right part.
// In our case median equals = (3 + 4) / 2 = 3.5

function medianOf2SortedArrays(arr1, arr2) {
  const result = [];

  // zip up the 2 arrays
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }

  while (arr1.length) {
    result.push(arr1.shift());
  }

  while (arr2.length) {
    result.push(arr2.shift());
  }

  // find median from the new array
  const len = result.length;
  const middleIndex = Math.floor(len / 2);
  // even
  if (len % 2 === 0) {
    // median index is new array length, divided by 2
    return (result[middleIndex] + result[middleIndex - 1]) / 2;
  } else {
    // odd
    return result[middleIndex];
  }
}

module.exports = medianOf2SortedArrays;
