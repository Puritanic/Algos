// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fibonacci(4) === 3

function memoize(fn) {
  const cache = {};
  return (...args) => {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

const fib = memoize(slowFibonacci);

function fibonacci(n) {
  const result = [0, 1];

  for (let i = 2; i <= n; i++) {
    const a = result[i - 1];
    const b = result[i - 2];

    result.push(a + b);
  }

  return result[n];
}

// Write a function that returns the nth number in the Fibonacci sequence,
// using dynamic programming to optimize its run time

const FIB_CACHE = { 1: 1, 2: 1 };

const dynamicProgFibonacci = n => {
  if (FIB_CACHE[n]) return FIB_CACHE[n];

  FIB_CACHE[n] = dynamicProgFibonacci(n - 1) + dynamicProgFibonacci(n - 2);

  return FIB_CACHE[n];
};

// Naive/Non-Dynamic Programming implementation example
const naiveFibonacci = n => {
  if (n === 1 || n === 2) return 1;

  return naiveFibonacci(n - 1) + naiveFibonacci(n - 2);
};

module.exports = {
  fib,
  fibonacci,
  dynamicProgFibonacci,
  naiveFibonacci
};
