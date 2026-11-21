'use strict';

const readline = require('node:readline');

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const secretNumber = generateRandomNumber();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askNumber() {
  rl.question('Enter your number: ', (number) => {
    if (!checkIsValidUserInput(number)) {
      process.stdout.write('Invalid input. Enter a 4-digit. No duplicates.\n');

      return askNumber();
    }

    const { bulls, cows } = getBullsAndCows(Number(number), secretNumber);

    process.stdout.write(`Bulls: ${bulls}, Cows: ${cows}\n`);

    if (bulls === 4) {
      process.stdout.write('You win!\n');
      rl.close();

      return;
    }

    askNumber();
  });
}

askNumber();
