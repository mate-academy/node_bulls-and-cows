'use strict';

function getBullsAndCows(userInput, numberToGuess) {
  const result = {
    bulls: 0,
    cows: 0,
  };
  const userNumber = userInput.toString().split('');
  const trueNumber = numberToGuess.toString().split('');

  for (let i = 0; i < 4; i++) {
    if (userNumber[i] === trueNumber[i]) {
      result.bulls++;
    } else if (trueNumber.includes(userNumber[i])) {
      result.cows++;
    }
  }

  return result;
}

module.exports = {
  getBullsAndCows,
};
