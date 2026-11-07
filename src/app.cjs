'use strict';
// import { generateRandomNumber } from './modules/generateRandomNumber.js';
// import { checkIsValidUserInput } from './modules/checkIsValidUserInput.js';

const readline = require('readline/promises');
const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const { generateRandomNumber } = require('./modules/generateRandomNumber.js');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput.js');
const { getBullsAndCows } = require('./modules/getBullsAndCows.js');
const generatedNumber = generateRandomNumber();

async function makeGuess() {
  const userGuess = await terminal.question('Enter your number guess:\n');
  let validatedUserGuess = userGuess;

  if (!checkIsValidUserInput(userGuess)) {
    let invalidGuess = true;

    while (invalidGuess) {
      const updatedGuess = await terminal.question(
        `Wrong input! Please enter valid number that contains 4 digits and doesn't start with 0\n`,
      );

      if (checkIsValidUserInput(updatedGuess)) {
        invalidGuess = false;
        validatedUserGuess = updatedGuess;
      }
    }
  }

  return validatedUserGuess;
}

async function startGame() {
  const guess = await makeGuess();
  const bullsAndCows = getBullsAndCows(+guess, generatedNumber);

  if (bullsAndCows.bulls === 4) {
    // eslint-disable-next-line no-console
    console.log(
      `You have guessed the correct number ${generatedNumber}! Congrads!`,
    );
    terminal.close();

    return;
  }

  // eslint-disable-next-line no-console
  console.log(
    `You have guessed correctly ${bullsAndCows.bulls} bulls and ${bullsAndCows.cows} cows!`,
  );
  startGame();
}

startGame();
