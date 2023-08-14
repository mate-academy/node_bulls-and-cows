'use strict';

const findBulls = (guessedNumber, randomNumber) => {
  let amountOfBulls = 0;
  const guessed = String(guessedNumber).split('');
  const random = randomNumber.split('');

  for (let i = 0; i < guessed.length; i++) {
    if (guessed[i] === random[i]) {
      amountOfBulls++;
    }
  }

  return amountOfBulls;
};

const findCows = (guessedNumber, random) => {
  let anountOfCows = 0;
  const guessed = String(guessedNumber).split('');

  for (let i = 0; i < guessed.length; i++) {
    if (random.includes(guessed[i])
        && guessed[i] !== random[i]) {
      anountOfCows++;
    }
  }

  return anountOfCows;
};

module.exports.findBulls = findBulls;
module.exports.findCows = findCows;
