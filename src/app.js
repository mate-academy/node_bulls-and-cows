'use strict';

const readline = require('node:readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const randomNumber = generateRandomNumber();
let steps = 0;

const log = (message) => {
  terminal.write(`${message}\n`);
};

const playGame = () => {
  steps++;
  terminal.question(`Your turn: `, (userInput) => {
    const isValid = checkIsValidUserInput(userInput);

    if (isValid) {
      const roundResult = getBullsAndCows(+userInput, randomNumber);

      if (roundResult.bulls !== 4) {
        log(`\nBulls: ${roundResult.bulls}\nCows: ${roundResult.cows}\n`);
        playGame();
      } else {
        log(`Congratulations! You've guessed the number: ${randomNumber} in ${steps} steps.`);
        terminal.close();
      }
    } else {
      log('\nInvalid number format!\n');
      playGame();
    }
  });
};

playGame();
