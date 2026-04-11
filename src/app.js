/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const numberToGuess = generateRandomNumber();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('--- The Game has Started! ---');
console.log('I have generated a random 4-digit number for you to guess.');

const gameLoop = () => {
  rl.question('Enter your guess: ', (input) => {
    if (!checkIsValidUserInput(input)) {
      console.log('Wrong input!');

      return gameLoop();
    }

    const guess = parseInt(input, 10);
    const { bulls, cows } = getBullsAndCows(guess, numberToGuess);

    if (bulls === 4) {
      console.log(`Congratulations! You guessed the number ${numberToGuess}!`);
      rl.close();
    } else {
      console.log(`Result: Bulls: ${bulls}, Cows: ${cows}`);
      gameLoop();
    }
  });
};

gameLoop();

module.exports = {
  numberToGuess,
  checkIsValidUserInput,
  getBullsAndCows,
};
