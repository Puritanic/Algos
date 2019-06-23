// Write a function that

/**
 * takes in an sorted array containing a range of consecutive integers beginning with 1,
 * and returns (ONE) the missing number from that range.
 * @param rangeArray {Array} - array of numbers - MUST BE SORTED and MUST BEGIN WITH 1
 * @returns {number}
 */
const findMissingNumberInRange = rangeArray => {
  const maxNum = rangeArray[rangeArray.length - 1];
  const MAX_RANGE_SUM = Math.floor((maxNum * (maxNum + 1)) / 2);
  let rangeArraySum = 0;

  for (let i = 0, len = rangeArray.length; i < len; i++) {
    rangeArraySum += rangeArray[i];
  }

  return MAX_RANGE_SUM - rangeArraySum;
};

module.exports = findMissingNumberInRange;
