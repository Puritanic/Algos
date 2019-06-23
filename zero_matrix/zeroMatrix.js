/**
 * You are given a matrix of integers. Modify the matrix such that if a row or column contains a 0, make the values in the entire row or column 0.
 * @param matrix {[Array]}
 * @returns {Array}
 */
const zeroMatrix = matrix => {
  const zero = [];

  for (let i = 0, len = matrix.length; i < len; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        const tuple = [];
        tuple[0] = i;
        tuple[1] = j;
        zero.push(tuple);
      }
    }
  }

  /* eslint-disable no-shadow */
  /**
   *
   * @param matrix {Array}
   * @param position {Array}
   */
  const mutateZero = (matrix, position) => {
    for (let i = 0, len = matrix.length; i < len; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        if (position[0] === i || position[1] === j) {
          // eslint-disable-next-line no-param-reassign
          matrix[i][j] = 0;
        }
      }
    }
  };

  zero.forEach(tuple => {
    mutateZero(matrix, tuple);
  });

  return matrix;
};

console.log(zeroMatrix([[1, 2, 3], [4, 5, 0], [0, 6, 7]]));

module.exports = zeroMatrix;
