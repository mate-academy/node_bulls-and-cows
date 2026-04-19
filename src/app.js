/* eslint-disable no-console */
'use strict';

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');

const readline = require('readline/promises');
const { stdin, stdout } = require('process');

async function startGame() {
  const rl = readline.createInterface({ input: stdin, output: stdout });

  console.log("Let's play Bulls and Cows!");

  const secret = generateRandomNumber();

  try {
    while (true) {
      const guess = await rl.question('Enter your guess: ');

      if (!checkIsValidUserInput(guess)) {
        console.log('Invalid input. Please enter a 4-digit number.');
        continue;
      }

      if (guess === secret.toString()) {
        console.log(`Congratulations! You guessed the number.`);
        break;
      } else {
        const result = getBullsAndCows(guess, secret);

        console.log('Wrong guess, try again!', result);
      }
    }
  } finally {
    rl.close();
  }
}
startGame();
