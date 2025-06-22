'use strict';

const readline = require('node:readline');

const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput.js');
const { generateRandomNumber } = require('./modules/generateRandomNumber.js');
const { getBullsAndCows } = require('./modules/getBullsAndCows.js');

const numberToGuess = generateRandomNumber();

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function game() {
  terminal.question('Enter your guess:\n', (userInput) => {
    if (!checkIsValidUserInput(userInput)) {
      process.stdout.write('Invalid input\n');
      game();
    } else {
      const result = getBullsAndCows(Number(userInput), numberToGuess);

      process.stdout.write(`Bulls: ${result.bulls}, Cows: ${result.cows}\n`);

      if (result.bulls === 4) {
        process.stdout.write('You win!');
        terminal.close();
      } else {
        game();
      }
    }
  });
}

game();
