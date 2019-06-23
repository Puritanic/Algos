/**
 *
 * @param arr {Array} array of integers
 * @param num {Number} integer
 * @returns {[Number]}
 */
function rotateArray(arr) {
  const shifted = [];

  for (let i = 0; i < arr.length; i++) {
    shifted.unshift(arr[i]);
  }

  return shifted;
}

module.exports = rotateArray;
