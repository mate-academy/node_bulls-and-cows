/* eslint-disable no-console */
'use strict';

const minimist = require('minimist');
const readline = require('readline');

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const args = minimist(process.argv.slice(2));

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const secretNum = args.secret ? Number(args.secret) : generateRandomNumber();

if (args.debug) {
  console.log(`Secret number generated: ${secretNum}`);
}

const askQuestion = () => {
  terminal.question('Enter your guess: ', (answer) => {
    if (!checkIsValidUserInput(answer)) {
      console.log(`Must be exactly 4 unique digits and cannot start with 0`);

      return askQuestion();
    }

    const result = getBullsAndCows(Number(answer), secretNum);

    console.log(`Result: ${result.bulls} bulls, ${result.cows} cows`);

    if (result.bulls === 4) {
      console.log('You guessed the secret number correctly');
      terminal.close();
    } else {
      askQuestion();
    }
  });
};

askQuestion();
