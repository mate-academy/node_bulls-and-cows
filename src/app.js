/* eslint-disable no-console */
'use strict';

const readline = require('node:readline');

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const NUMBER_LENGTH = 4;

async function startApp() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const randomNumber = generateRandomNumber();

  console.log('Welcome to Bulls and Cows Game!');
  console.log(`Guess a ${NUMBER_LENGTH}-digit number with unique digits.`);

  try {
    while (true) {
      const isNumberGuessed = await makeGuess({
        rl,
        randomNumber,
      });

      if (isNumberGuessed) {
        rl.close();
        break;
      }
    }
  } catch (error) {
    console.error(error.message);
    rl.close();
  }
}

async function makeGuess(options) {
  const { rl, randomNumber } = options;

  const userInput = await new Promise((resolve) => {
    return rl.question('Enter your number: ', resolve);
  });

  const isInputValid = checkIsValidUserInput(userInput);

  if (!isInputValid) {
    console.log('Whoops, you entered an invalid number!');

    return false;
  }

  const { bulls, cows } = getBullsAndCows(userInput, randomNumber);

  const conditionToWin = bulls === randomNumber.toString().length;

  if (conditionToWin) {
    console.log('You won!');

    return true;
  } else {
    console.log(`bulls: ${bulls}, cows: ${cows}`);

    return false;
  }
}

startApp();
