'use strict';

const calculatedBullsAndCows = (secretNumber, userNumber) => {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < 4; i++) {
    if (secretNumber[i] === userNumber[i]) {
      bulls++;
    } else if (secretNumber.includes(userNumber[i])) {
      cows++;
    }
  }

  return `Bulls: ${bulls}, cows: ${cows}.`;
};

module.exports.calculatedBullsAndCows = calculatedBullsAndCows;
