// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// USING OBJECTS

function anagrams(stringA, stringB) {
  // removed symbols and spaces, converted to lowercase
  // converted to array. arranged serially, joined to form a string
  // then compared if they're the same
  let strA = stringA
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
  let strB = stringB
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");

  return strA === strB;
}

module.exports = anagrams;

// USING OBJECTS

// function anagrams(stringA, stringB) {
//     stringA.replace(/[^\w]/g, "").toLowerCase();
//     stringB.replace(/[^\w]/g, "").toLowerCase();

//     if (stringA.length !== stringB.length) return false;

//     let objA = {};
//     let objB = {};

//     for (const char of stringA) {
//       objA[char] = objA[char] + 1 || 1;
//     }

//     for (const char of stringB) {
//       objB[char] = objB[char] + 1 || 1;
//     }

//     for (const char in objA) {
//       if (objA[char] !== objB[char]) return false;
//     }

//     return true;
//   }
