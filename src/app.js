'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

function ask(rl, question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

// Write your code here
async function run() {
  const numberToGuess = generateRandomNumber();

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // eslint-disable-next-line no-console
  console.log(
    // eslint-disable-next-line max-len
    'Bulls and Cows: guess a 4-digit number with all different digits (not starting with 0).',
  );

  try {
    // game loop
    while (true) {
      const input = await ask(rl, 'Your guess: ');

      if (!checkIsValidUserInput(input)) {
        // eslint-disable-next-line no-console
        console.log(
          'Invalid input. Enter 4 different digits, first digit not 0.',
        );
        continue;
      }

      const userNumber = Number(input);
      const { bulls, cows } = getBullsAndCows(userNumber, numberToGuess);

      // eslint-disable-next-line no-console
      console.log(`Result: bulls: ${bulls}, cows: ${cows}`);

      if (bulls === 4) {
        // eslint-disable-next-line no-console
        console.log('You win!');
        break;
      }
    }
  } finally {
    rl.close();
  }
}

run();
