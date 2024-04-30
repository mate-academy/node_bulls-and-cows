/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const INVALID_INPUT_ERROR_MESSAGE = 'Invalid input. Please try again.';
const SUCCESS_MESSAGE = 'Congratulations! You won!';
const NUMBER_REQUEST_MESSAGE = 'What is the number? ';

const numberToGuess = generateRandomNumber();

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const startRound = (userInput) => {
  if (!checkIsValidUserInput(userInput)) {
    console.log(INVALID_INPUT_ERROR_MESSAGE);
    terminal.close();

    return;
  }

  const result = getBullsAndCows(userInput, numberToGuess);

  if (result.bulls === 4) {
    console.log(SUCCESS_MESSAGE);
    terminal.close();
  } else {
    console.log(getBullsAndCows(userInput, numberToGuess));
    terminal.question(NUMBER_REQUEST_MESSAGE, startRound);
  }
};

terminal.question(NUMBER_REQUEST_MESSAGE, startRound);
