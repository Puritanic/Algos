// given sorted list, return special index (if value at index is the same as index)

const specialIndex = (array, start = 0, end) => {
  if (!end) end = array.length - 1;

  const middle = Math.floor((end + start) / 2);

  if (middle === end) return -1;

  // binary search
  if (array[middle] === middle) return array[middle];

  if (array[middle] < middle && array.length > 1) {
    // search right side
    return specialIndex(array, middle, end);
  } else if (array[middle] > middle && array.length > 1) {
    // search left side
    return specialIndex(array, start, middle);
  }
};


module.exports = specialIndex;
