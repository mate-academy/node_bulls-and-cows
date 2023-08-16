'use strict';

const makeValidation = require('./validation').makeValidation;

function getBullsAndCows(guess, randomNumber) {
  const validation = makeValidation(guess);

  if (validation) {
    return validation;
  }

  let bulls = 0;
  let cows = 0;
  const target = randomNumber.split('');

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === target[i]) {
      bulls++;
      target[i] = ' ';
    }
  }

  for (let i = 0; i < guess.length; i++) {
    if (target.includes(guess[i])) {
      cows++;

      const cowIndex = target.indexOf(guess[i]);

      target[cowIndex] = ' ';
    }
  }

  return `${bulls} Bulls, ${cows} Cows`;
}

module.exports.getBullsAndCows = getBullsAndCows;
