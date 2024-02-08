/* eslint-disable no-console */
'use strict';

const readline = require('node:readline/promises');

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

async function getUserInput() {
  const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const userInput = await terminal.question(
    'Enter a number of 4 different digits: '
  );

  terminal.close();

  return userInput;
}

async function processGame() {
  const numberToGuess = generateRandomNumber();

  console.log(numberToGuess);

  let userInput = '';

  while (numberToGuess !== +userInput) {
    userInput = await getUserInput();

    console.log(userInput);

    if (!checkIsValidUserInput(userInput)) {
      console.log('No valid input!');
      continue;
    }

    const { bulls, cows } = getBullsAndCows(+userInput, numberToGuess);

    console.log('Try again!');
    console.log(`Current result: bulls: ${bulls} | cows: ${cows}`);
    console.log(`----------------------------------------------------`);
  }

  console.log('Сongratulations! You won!');
}

processGame();
