'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numberToGuess = generateRandomNumber();
let attempts = 0;

function print(message) {
  terminal.write(`${message}\n`);
}

function askGuess() {
  terminal.question('Enter a 4-digit number: ', (userInput) => {
    const guess = userInput.trim();

    if (!checkIsValidUserInput(guess)) {
      print(
        'Invalid input: enter 4 different digits that do not start with 0.',
      );
      askGuess();

      return;
    }

    attempts += 1;

    const { bulls, cows } = getBullsAndCows(Number(guess), numberToGuess);

    print(`Bulls: ${bulls}, cows: ${cows}`);

    if (bulls === 4) {
      print(`You won! The number was ${numberToGuess}. Attempts: ${attempts}`);
      terminal.close();

      return;
    }

    askGuess();
  });
}

print('Welcome to Bulls and Cows! Guess the 4-digit number.');
askGuess();
