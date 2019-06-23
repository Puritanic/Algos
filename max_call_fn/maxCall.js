/**
 * Limits passed function to be called only num times
 * @param func {Function}
 * @param num {Number}
 * @returns {Function}
 */
const maxCall = (func, num) => {
  let timesCalled = 0;

  return () => {
    console.log(timesCalled);
    if (timesCalled >= num) {
      console.warn("Cannot invoke func");
    } else {
      func();
      timesCalled++;
    }
  };
};





module.exports = maxCall;
