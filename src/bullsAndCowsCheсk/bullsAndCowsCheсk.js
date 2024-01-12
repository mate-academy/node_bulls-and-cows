'use strict';

function hasFourDifferentDigits(number) {
  const digitSet = new Set(number.toString());

  return digitSet.size === 4;
}

function compareNumbers(secretNumber, guessedNumber) {
  const secretDigits = secretNumber.toString().split('');
  const guessedDigits = guessedNumber.toString().split('');

  let bulls = 0;
  let cows = 0;

  for (let i = 0; i < 4; i++) {
    if (secretDigits[i] === guessedDigits[i]) {
      bulls++;
    }
  }

  const secretDigitSet = new Set(secretDigits);

  for (const digit of guessedDigits) {
    if (secretDigitSet.has(digit) && secretDigits.indexOf(digit) === -1) {
      cows++;
    }
  }

  return {
    bulls,
    cows,
  };
}

module.exports = {
  hasFourDifferentDigits,
  compareNumbers,
};
