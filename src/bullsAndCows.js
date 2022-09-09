/* eslint-disable */
'use strict';
/* eslint-enable */

// - The bullsAndCows module is used to compare
// |-- the user's and computes's strings
// |-- and count the Bulls\Cows result:
function bullsAndCows(user, cp) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < cp.length; i++) {
    if (cp[i] === user[i]) {
      bulls++;
    } else if (cp.split('').includes(user[i])) {
      cows++;
    }
  }

  return `\nIts a ${bulls} bulls and ${cows} cows!`;
}

export { bullsAndCows };
