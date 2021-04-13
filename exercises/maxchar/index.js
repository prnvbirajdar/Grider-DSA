// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  // empty edgecase
  if (!str) return undefined;

  // convert everything to string
  str = str.toString();

  // empty obj to store char and char repetition values
  let strObj = {};
  // most repeated count and its corresponsing char
  let maxCount = 0;
  let maxChar = "";

  // iterate over string and pass string and count values in strObj
  for (const char of str) {
    strObj[char] ? strObj[char]++ : (strObj[char] = 1);
  }

  // iterate over obj and compare each char with maxChar
  // assign new maxChar, if its count is higher than previous
  for (const key in strObj) {
    if (strObj[key] > maxCount) {
      maxCount = strObj[key];
      maxChar = key;
    }
  }

  return maxChar;
}

module.exports = maxChar;
