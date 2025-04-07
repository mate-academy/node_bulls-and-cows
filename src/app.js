/* eslint-disable no-console */
'use strict';
import readline from 'node:readline';

const { checkIsValidUserInput } = await import(
  './modules/checkIsValidUserInput.js'
);

const { getBullsAndCows } = await import('./modules/getBullsAndCows.js');

const { generateRandomNumber } = await import(
  './modules/generateRandomNumber.js'
);

function tryAgain() {
  return terminal.question('Try again: ', (userNumber) => {
    return processGuess(userNumber);
  });
}

const randomNumber = generateRandomNumber();

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function processGuess(userNumber) {
  const isValid = checkIsValidUserInput(userNumber);

  if (!isValid) {
    console.log('You should write a 4 different digits number');

    return tryAgain();
  }

  const { bulls, cows } = getBullsAndCows(+userNumber, randomNumber);

  if (bulls === 4) {
    console.log('You WIN!');
    terminal.close();
  } else {
    console.log(`You got ${bulls} bulls and ${cows} cows`);
    tryAgain();
  }
}

terminal.question('Hi, guess the number: \n', (userInputNumber) => {
  processGuess(userInputNumber);
});
