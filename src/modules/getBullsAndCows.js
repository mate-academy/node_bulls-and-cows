/* eslint-disable no-console */
'use strict';

function getBullsAndCows(userInput, numberToGuess) {
  const result = {
    bulls: 0,
    cows: 0,
  };

  const user = userInput.toString().split('');
  const number = numberToGuess.toString().split('');

  for (let i = 0; i < user.length; i++) {
    if (user[i] === number[i]) {
      result.bulls = result.bulls + 1;
    } else if (number.includes(user[i])) {
      result.cows = result.cows + 1;
    }
  }

  console.log('result', result);

  return result;
}

module.exports = {
  getBullsAndCows,
};
