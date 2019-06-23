// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

function reverse2(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

function reverse3(str) {
  let reversed = "";

  for (const character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

module.exports = { reverse, reverse2, reverse3 };
