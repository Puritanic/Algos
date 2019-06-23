/**
 * takes in an array of integers and returns the first repeated element, or null if no elements are repeated.
 * @param array {Array} array of integers
 */
const firstRepeatedElement = array => {
  let lowestIndex;
  const seenElements = {};

  for (let i = 0, len = array.length; i < len; i++) {
    if (typeof seenElements[array[i]] !== "undefined") {
      if (
        typeof lowestIndex === "undefined" ||
        seenElements[array[i]] < lowestIndex
      ) {
        lowestIndex = seenElements[array[i]];
      }
    } else {
      seenElements[array[i]] = i;
    }
  }

  return typeof lowestIndex === "undefined" ? null : array[lowestIndex];
};

module.exports = firstRepeatedElement;
