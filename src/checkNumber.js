'use strict';

function isNumberHasDuplicates(number) {
  return number.split('').some(digit => {
    return number.indexOf(digit) !== number.lastIndexOf(digit);
  });
}

function checkBullsAndCows(targetNum, currentNum) {
  let bulls = 0;
  let cows = 4;

  for (const index in targetNum) {
    if (currentNum[index] === targetNum[index]) {
      bulls++;
      cows--;
    } else if (!targetNum.includes(currentNum[index])) {
      cows--;
    }
  }

  return [bulls, cows];
}

module.exports = {
  checkBullsAndCows,
  isNumberHasDuplicates,
};
