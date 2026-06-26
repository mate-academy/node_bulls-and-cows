/* eslint-disable no-console */
'use strict';

const readline = require('readline/promises');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function startGame() {
  console.log('=========================================');
  console.log('🐄 Welcome to Bulls and Cows! 🐂');
  console.log('I have generated a 4-digit secret number.');
  console.log('All digits are unique.');
  console.log('=========================================\n');

  const secret = generateRandomNumber();
  let attempts = 0;
  let isPlaying = true;

  while (isPlaying) {
    const guess = await rl.question(
      'Enter your 4-digit guess (or type "exit" to quit): ',
    );

    if (guess.toLowerCase() === 'exit') {
      console.log(`\nThanks for playing! The secret was ${secret}.`);
      rl.close();

      return;
    }

    if (!checkIsValidUserInput(guess)) {
      console.log('\nInvalid input. Please enter a valid 4-digit number.\n');
      continue;
    }

    attempts++;

    const { bulls, cows } = getBullsAndCows(secret, guess);

    console.log(`Result: ${bulls} Bull(s), ${cows} Cow(s)\n`);

    if (bulls === 4) {
      console.log(
        `🎉 Congratulations! You guessed the secret number ${secret} in ${attempts} attempts!`,
      );
      rl.close();
      isPlaying = false;
    }
  }
}
startGame();
