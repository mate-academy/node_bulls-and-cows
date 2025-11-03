'use strict';

const readline = require('node:readline');

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numberToGuess = generateRandomNumber();

const question = (prompt) => {
  return new Promise((resolve) => rl.question(prompt, resolve));
};

(async () => {
  let guessed = false;

  while (!guessed) {
    const userInput = await question('Enter your guess: ');

    if (!checkIsValidUserInput(userInput)) {
      process.stdout.write(
        'Invalid input! Enter 4 unique digits, first not 0.\n',
      );
      continue;
    }

    const result = getBullsAndCows(userInput, numberToGuess);

    process.stdout.write(`${result.bulls} Bulls, ${result.cows} Cows\n`);

    if (result.bulls === 4) {
      process.stdout.write(
        `Congratulations! You guessed the number: ${numberToGuess}\n`,
      );
      guessed = true;
    }
  }

  rl.close();
})();
