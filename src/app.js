'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const terminal = readline.createInterface(process.stdin, process.stdout);
const randomNum = generateRandomNumber();
const MAX_NUMBER_OF_DIGITS = 4;
const ENTER_A_NUMBER = `Enter a number of ${MAX_NUMBER_OF_DIGITS} different digits`;
const MESSAGE_FOR_WIN = `You guessed all numbers. Game is over!`;
const MESSAGE_FOR_LOSE = `You entered incorrect numbers. Please try again.\n`;

async function askForNumber() {
  while (true) {
    const digits = await promptUserInput(ENTER_A_NUMBER);

    if (checkIsValidUserInput(digits)) {
      const result = getBullsAndCows(digits, randomNum);

      displayResult(result);

      if (result.bulls === MAX_NUMBER_OF_DIGITS) {
        displayWinMessage();
        terminal.close();

        return;
      }
    } else {
      displayLoseMessage();
    }
  }
}

function promptUserInput(prompt) {
  return new Promise((resolve) => {
    terminal.question(prompt, (input) => {
      resolve(input);
    });
  });
}

function displayResult(result) {
  process.stdout.write(`Result: ${JSON.stringify(result)}\n`);
}

function displayWinMessage() {
  process.stdout.write(MESSAGE_FOR_WIN);
}

function displayLoseMessage() {
  process.stdout.write(MESSAGE_FOR_LOSE);
}

askForNumber();
