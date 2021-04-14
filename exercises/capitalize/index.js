// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let finalStr = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    // if previous char is space, current char is starting char of a new word
    // thus it needs to be uppercase
    if (str[i - 1] === " ") finalStr += str[i].toUpperCase();
    else finalStr += str[i];
  }

  return finalStr;
}

module.exports = capitalize;

// function capitalize(str) {
//     // splits str in arrays as ['a','short','sentence']
//     let arr = str.split(" ");
//     // empty arr
//     let newArr = [];

//     for (const char of arr) {
//       //split every single string in the array further
//       // [ 'a' ]
//       // [ 's', 'h', 'o', 'r', 't' ]
//       // [ 's', 'e', 'n', 't', 'e', 'n', 'c', 'e' ]
//       let charArr = char.split("");
//       // first item is uppercase
//       charArr[0] = charArr[0].toUpperCase();
//       // join the string back up
//       // A
//       // Short
//       // Sentence
//       let jointArr = charArr.join("");

//       // every char is pushed in new empty array
//       newArr.push(jointArr);
//     }
//     // convert to string and adds space between each string element
//     // A Short Sentence
//     return newArr.join(" ");
//   }
