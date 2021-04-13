// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  if (Math.sign(n) === 0) return n;

  if (Math.sign(n) === 1) {
    const stringNum = n.toString().split("").reverse().join("");

    return parseInt(stringNum);
  } else {
    const stringNum = "-" + n.toString().split("").reverse().join("");

    return parseInt(stringNum);
  }
}

module.exports = reverseInt;
