// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// IDEAL SOLUTION

function reverseInt(n) {
  const stringNum = n.toString().split("").reverse().join("");

  return parseInt(stringNum) * Math.sign(n);
}

module.exports = reverseInt;

// MY SOLUTION

// function reverseInt(n) {
//   const stringNum = n.toString().split("").reverse().join("");

//   if (Math.sign(n) === -1) {
//     return parseInt(stringNum) * -1;
//   }

//   return parseInt(stringNum);
// }
