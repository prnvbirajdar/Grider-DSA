// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//USING REDUCE

function reverse(str) {
  if (str) {
    str = str.toString();
    return str.split("").reduce((rev, char) => char + rev, "");
  }
}

module.exports = reverse;

//USING ARRAY METHODS

// function reverse(str) {
//     if (str) {
//       return str.toString().split("").reverse().join("");
//     }
//   }

//USING CONVENTIONAL METHOD

// function reverse(str) {
//     if (str) {
//       str = str.toString();

//       let reverseStr = "";

//       for (const char of str) {
//         reverseStr = char + reverseStr;
//       }
//       return reverseStr;
//     }
//   }
