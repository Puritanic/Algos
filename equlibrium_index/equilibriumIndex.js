/*
  The equilibrium index of a sequence is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes.
   For example, in a sequence A:
  
  𝐴[0]=−7,𝐴[1]=1,𝐴[2]=5,𝐴[3]=2,𝐴[4]=−4,𝐴[5]=3,𝐴[6]=0
  
  3 is an equilibrium index, because:
  
  𝐴[0]+𝐴[1]+𝐴[2]=𝐴[4]+𝐴[5]+𝐴[6]
  
  6 is also an equilibrium index, because:
  
  𝐴[0]+𝐴[1]+𝐴[2]+𝐴[3]+𝐴[4]+𝐴[5]=0 (The sum of zero elements is zero)
  
  7 is not an equilibrium index - because it is not a valid index of sequence A.
 */

// in O(N^2) time
function equilibriumIndexA(A) {
  // write your code in JavaScript (Node.js 6.4.0)

  for (let i = 0; i < A.length; i++) {
    const leftArr = A.slice(0, i);
    const rightArr = A.slice(i + 1);
    const sumLeft = leftArr.reduce((a, b) => a + b, 0);
    const sumRight = rightArr.reduce((a, b) => a + b, 0);

    if (sumLeft === sumRight) return i;
  }

  return -1;
}

//in O(N) time
function equilibriumIndexB(A) {
  let sumLeft = 0;
  let sumRight = A.reduce((a, b) => a + b, 0);

  for (let i = 0; i < A.length; i++) {
    sumRight -= A[i];
    if (sumLeft === sumRight) {
      return i;
    }
    sumLeft += A[i];
  }

  return -1;
}

function eqIndices(arr) {
  // start the right hand sum as the sum of the whole array
  let rightSum = arr.reduce((m, c) => m + c, 0);
  let leftSum = 0;
  let isEndPoint;

  // Here we use reduce to build up an array of all
  // indexes which have an equilibrium
  return arr.reduce((answer, cur, i) => {
    rightSum -= cur;
    isEndPoint = i === 0 || i === arr.size - 1;
    // If we're at the beginning or the end of the array,
    // just return the answer we already have.  This will
    // be the empty array we started with when i == 0, and
    // it will be our final answer when we're at the last elm.
    if (isEndPoint) return answer;

    leftSum += arr[i - 1];
    if (leftSum === rightSum) answer.push(i);

    return answer;
  }, []);
}

module.exports = { equilibriumIndexA, equilibriumIndexB, eqIndices };
