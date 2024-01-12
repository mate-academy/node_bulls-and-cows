/* eslint-disable no-console */
'use strict';

function calculateBullsCows(attempt, rightNumber) {
  const result = {
    bulls: 0,
    cows: 0,
  };

  if (attempt.length !== 4) {
    console.log('Enter a 4-digit number!');
  }

  if (attempt === rightNumber) {
    console.log('Congratulations, you won!');

    return -1;
  }

  for (let i = 0; i < attempt.length; i++) {
    if (attempt[i] === rightNumber[i]) {
      result.bulls++;
      continue;
    }

    if (rightNumber.includes(attempt[i])) {
      result.cows++;
    }
  }

  return result;
}

module.exports = {
  calculateBullsCows,
};
