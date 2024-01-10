/* eslint-disable no-console */
'use strict';

const prompt = require('prompt-sync')();
const { validateGuess } = require('./validator');
const { getRandomNumber } = require('./randomizer');
const { checkResults } = require('./helper');

const randomNumber = getRandomNumber();

console.log('Type "quit" to exit the game');

while (true) {
  const guessNumber = prompt('Try to guess the number: ');

  if (guessNumber === 'quit') {
    break;
  }

  const validationResult = validateGuess(guessNumber);

  if (validationResult !== 'OK') {
    console.log(validationResult);
    continue;
  }

  const { bulls, cows } = checkResults(guessNumber, randomNumber);

  console.log(`\nBulls: ${bulls}\nCows: ${cows}\n`);

  if (bulls === 4) {
    console.log('You guessed the number!');
    break;
  }
}
