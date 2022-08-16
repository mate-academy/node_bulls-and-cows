'use strict';

function calculatingBullsCows(number, targetNumber) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < targetNumber.length; i++) {
    if (targetNumber[i] === number[i]) {
      bulls++;
    } else if (number.includes(targetNumber[i])) {
      cows++;
    }
  }

  return `The result is bulls-${bulls}, cows-${cows}`;
}

module.exports.calculatingBullsCows = calculatingBullsCows;
