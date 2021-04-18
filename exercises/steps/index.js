// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  // str adds blank space
  let str = " ";
  // str1 adds #
  let str1 = "#";
  // we push all of that to an empty array
  let strN = [];

  for (let i = 1; i <= n; i++) {
    // str1.repeat(i) gives
    // #
    // ##
    // ###
    // ####
    // #####

    // str.repeat(n - i) gives empty spaces
    // "    "
    // "   "
    // "  "
    // " "
    // ""

    strN.push(str1.repeat(i) + str.repeat(n - i));
  }

  // mapping and console logging gives us the required result
  strN.map((el) => console.log(el));
}

module.exports = steps;
