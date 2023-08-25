'use strict';

const NUM_LENGTH = 4;

module.exports.getBullsAndCows = (numberToGuess, enteredNumber) => {
  let bullsCount = 0;
  let cowsCount = 0;

  for (let i = 0; i < NUM_LENGTH; i++) {
    const isBull = enteredNumber[i] === numberToGuess[i];
    const isCow = numberToGuess.includes(enteredNumber[i]);

    if (isBull) {
      bullsCount++;
    } else if (isCow) {
      cowsCount++;
    }
  }

  return [bullsCount, cowsCount];
};
