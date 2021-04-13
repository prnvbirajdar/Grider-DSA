// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  stringA.replace(/[^\w]/g, "").toLowerCase();
  stringB.replace(/[^\w]/g, "").toLowerCase();

  if (stringA.length !== stringB.length) return false;

  let objA = {};
  let objB = {};

  for (const char of stringA) {
    objA[char] = objA[char] + 1 || 1;
  }

  for (const char of stringB) {
    objB[char] = objB[char] + 1 || 1;
  }

  for (const char in objA) {
    if (objA[char] !== objB[char]) return false;
  }

  return true
  
}

module.exports = anagrams;
