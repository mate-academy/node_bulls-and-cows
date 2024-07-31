'use strict';

const readline = require('node:readline');

const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');

const number = generateRandomNumber();

function ask() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Enter your number: ', (value) => {
    const isValid = checkIsValidUserInput(value);

    if (!isValid) {
      rl.close();
      process.stdout.write('Input is not valid\n');

      ask();

      return;
    }

    const result = getBullsAndCows(value, number);

    rl.close();

    if (result.bulls === 4) {
      process.stdout.write('Congrats!!\n');
    } else {
      process.stdout.write(`Bulls: ${result.bulls}, Cows: ${result.cows}\n`);
      ask();
    }
  });
}

ask();
