'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');

const numberToGuess = generateRandomNumber();
const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let finished = false;

function printMessage(message) {
  process.stdout.write(`${message}\n`);
}

printMessage('Welcome to Bulls and Cows!');
printMessage('Guess 4 different digits. The first digit cannot be 0.');
input.setPrompt('Your guess: ');
input.prompt();

input.on('line', (guess) => {
  if (finished) {
    return;
  }

  if (!checkIsValidUserInput(guess)) {
    printMessage('Enter exactly 4 different digits, without a leading 0.');
    input.prompt();

    return;
  }

  const { bulls, cows } = getBullsAndCows(Number(guess), numberToGuess);

  printMessage(`Bulls: ${bulls}, cows: ${cows}`);

  if (bulls === 4) {
    finished = true;
    printMessage(`You won! The number was ${numberToGuess}.`);
    input.close();

    return;
  }

  input.prompt();
});
