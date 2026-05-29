/* eslint-disable no-console */
'use strict';

const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

async function playBullsAndCows() {
  console.log('=== Bulls and Cows ===');

  const secretNumber = generateRandomNumber();

  console.log('The computer has picked a 4-digit number. Try to guess it!');

  let isGameWon = false;

  while (!isGameWon) {
    const answer = await rl.question('Enter your guess: ');

    if (answer === 'exit') {
      console.log('Game over');
      isGameWon = true;
      break;
    }

    if (!checkIsValidUserInput(answer)) {
      console.log(
        // eslint-disable-next-line max-len
        'Error: Enter exactly 4 DIFFERENT digits, starting with a non-zero digit!',
      );
      continue;
    }

    const result = getBullsAndCows(answer, secretNumber);

    console.log(`Result: ${result.bulls} bulls, ${result.cows} cows`);

    if (result.bulls === 4) {
      console.log('Congratulations! You guessed the number');
      isGameWon = true;
    }
  }

  rl.close();
}

playBullsAndCows();
