'use strict';

const getBullsAndCows = (generatedNumber, userNumber) => {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < 4; i++) {
    if (generatedNumber[i] === userNumber[i]) {
      bulls++;
    } else if (generatedNumber.includes(userNumber[i])) {
      cows++;
    }
  }

  return `Bulls: ${bulls}, Cows: ${cows}`;
};

module.exports.getBullsAndCows = getBullsAndCows;
