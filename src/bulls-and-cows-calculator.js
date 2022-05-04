'use strict';

function calculateBullsAndCows(enteredNums, correctNums) {
  let cows = 0;
  let bulls = 0;

  enteredNums.split('').forEach((item, i) => {
    if (correctNums.includes(item) && correctNums.indexOf(item) === i) {
      bulls += 1;
    }

    if (correctNums.includes(item) && correctNums.indexOf(item) !== i) {
      cows += 1;
    }
  });

  return `There are ${cows} cows and ${bulls} bulls in your number`;
}

module.exports = {
  calculateBullsAndCows,
};
