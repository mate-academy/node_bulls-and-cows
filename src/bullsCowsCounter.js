'use strict';

const getBullsAndCows = (target, input) => {
  let bulls = 0;
  let cows = 0;

  const targetStr = String(target);
  const inputStr = String(input);

  inputStr.split('').forEach((digit, index) => {
    if (inputStr[index] === targetStr[index]) {
      bulls++;
    } else if (targetStr.includes(digit)) {
      cows++;
    }
  });

  return `${bulls} bulls and ${cows} cows`;
};

module.exports.getBullsAndCows = getBullsAndCows;
