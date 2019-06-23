//given 2 arrays, array, return a mutated array with the indices from the 2nd array

//O(N) time
// O(N) space

const swap = (array, index1, index2) => {
  // let tempVal = array[index2];
  // array[index2] = array[index1];
  // array[index1] = tempVal;

  [array[index1], array[index2]] = [array[index2], array[index1]];
};

const mutateArray = (array, indexArr) => {
  const end = array.length;

  for (let i = 0, len = indexArr.length; i < len; i++) {
    array[end + indexArr[i]] = array[i];
  }

  array.splice(0, end);

  return array;
};

const mutate = (array, indexArr) => {
  let i = 0;

  while (i < indexArr.length) {
    if (indexArr[i] === i) {
      i++;
    } else {
      const swapIndex = index[i];
      swap(array, i, swapIndex);
      swap(indexArr, i, swapIndex);
    }
  }

  return array;
};

module.exports = { mutateArray, mutate };
