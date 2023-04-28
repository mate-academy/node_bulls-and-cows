'use strict';

const bullsAndCowsCalculator = (guess, numberToGuess) => {
  let bullsCount = 0;
  let cowsCount = 0;

  for (let i = 0; i < numberToGuess.length; i++) {
    if (guess[i] === numberToGuess[i]) {
      bullsCount++;
    } else if (numberToGuess.includes(guess[i])) {
      cowsCount++;
    }
  }

  return [bullsCount, cowsCount];
};

module.exports = { bullsAndCowsCalculator };
