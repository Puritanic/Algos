// Use Array.prototype.flat to flatten the array

/**
 * Deep flattens passed array if it has more arrays in iit
 * @param array
 * @returns {Array}
 */
const flatten = array => {
  let result = [];

  for (let i = 0, len = array.length; i < len; i++) {
    if (Array.isArray(array[i])) {
      result = result.concat(flatten(array[i]));
    } else {
      result.push(array[i]);
    }
  }

  return result;
};

const iterativeFlatten = array => {
  const result = [];
  let todo = [array];

  while (todo.length) {
    const current = todo.shift();

    if (Array.isArray(current)) {
      todo = [...todo, ...current];
    } else {
      result.push(current);
    }
  }

  return result;
};

const reduceFlatten = array => {
  return array.reduce((accum, iterator) => {
    return accum.concat(
      Array.isArray(iterator) ? reduceFlatten(iterator) : iterator
    );
  }, []);
};

module.exports = { iterativeFlatten, flatten, reduceFlatten };
