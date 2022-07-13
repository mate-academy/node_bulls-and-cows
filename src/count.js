'use strict';

/* eslint-disable no-console */

function countCowsAndBulls(numberToGuess, userGuess) {
  const secret = String(numberToGuess).split('').map(Number);
  const guess = String(userGuess).split('').map(Number);
  let bulls = 0;
  let cows = 0;
  const numbers = new Array(10).fill(0);

  secret.forEach((n, i) => {
    const s = secret[i];
    const g = guess[i];

    if (s === g) {
      bulls++;
    }

    if (numbers[s] < 0) {
      cows++;
    }

    if (numbers[g] > 0) {
      cows++;
    }
    numbers[s]++;
    numbers[g]--;
  });

  if (bulls === secret.length) {
    console.log('You won');

    return true;
  } else {
    console.log('Bulls: ', bulls);
    console.log('Cows: ', cows);

    return false;
  }
}

module.exports.countCowsAndBulls = countCowsAndBulls;
