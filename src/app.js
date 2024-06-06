/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const {
  VALID_LENGTH,
  checkIsValidUserInput,
} = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getUserInput() {
  return new Promise((resolve) => {
    rl.question('Enter number: ', (number) => {
      resolve(number);
    });
  });
}

async function play() {
  const numberToGuess = generateRandomNumber();
  let gameWon = false;

  do {
    const input = await getUserInput();

    if (input === 'show') {
      console.log(`number to guess is: ${numberToGuess}`);
    } else if (!checkIsValidUserInput(input)) {
      console.log(
        `number is incorrect, pass ${VALID_LENGTH} digits number with unique digits`,
      );
    } else {
      const bullsAndCows = getBullsAndCows(+input, numberToGuess);

      console.log(bullsAndCows);

      if (bullsAndCows.bulls === VALID_LENGTH) {
        console.log(`Game won correct number was ${numberToGuess}`);
        gameWon = true;
      }
    }
  } while (!gameWon);

  rl.close();
}

play();
