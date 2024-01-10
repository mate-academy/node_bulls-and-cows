'use strict';

function isWin(number, guess) {
  return number === guess;
}

function getResult(number, guess) {
  if (number === guess) {
    return 'win';
  }

  let bullsCount = 0;
  let cowsCount = 0;

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === number[i]) {
      bullsCount++;
      continue;
    }

    if (number.includes(guess[i])) {
      cowsCount++;
    }
  }

  return `${bullsCount} bulls, ${cowsCount} cows`;
}

module.exports = {
  isWin,
  getResult,
};
