'use strict';

function getBullsAndCows(correctNumber, userNumber) {
  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < correctNumber.length; i++) {
    const hasCorrectDigit = correctNumber.includes(userNumber[i]);

    if (hasCorrectDigit && correctNumber[i] === userNumber[i]) {
      bulls++;
    }

    if (hasCorrectDigit && correctNumber[i] !== userNumber[i]) {
      cows++;
    }
  }

  return [bulls, cows];
}

module.exports = {
  getBullsAndCows,
};
