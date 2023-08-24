'use strict';

const NUM_LENGTH = 4;

module.exports.getBullsAndCows = (numberToGuess, enteredNumber) => {
  const numberToGuessCopy = numberToGuess.split('');
  const enteredNumberCopy = enteredNumber.split('');
  let bullsCount = 0;
  let cowsCount = 0;

  for (let i = 0; i < NUM_LENGTH; i++) {
    const isBull = enteredNumberCopy[0] === numberToGuessCopy[0];
    const isCow = numberToGuess.includes(enteredNumberCopy[0]);

    if (isBull) {
      bullsCount++;
    } else if (isCow) {
      cowsCount++;
    }

    numberToGuessCopy.shift();
    enteredNumberCopy.shift();
  }

  return [bullsCount, cowsCount];
};
