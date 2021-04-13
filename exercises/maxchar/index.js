// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  // empty edgecase
  if (!str) return undefined;

  str = str.toString();

  let strObj = {};
  let maxCount = 0;
  let maxChar = "";
  for (const char of str) {
    strObj[char] ? strObj[char]++ : (strObj[char] = 1);
  }

  for (const key in strObj) {
    if (strObj[key] > maxCount) {
      maxCount = strObj[key];
      maxChar = key;
    }
  }

  return maxChar;
}

//abcdefghijklmnaaaaa

module.exports = maxChar;
