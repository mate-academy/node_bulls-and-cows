'use strict';

const readline = require('node:readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { generateRandomNumber } = require('./modules/generateRandomNumber');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numberToGuess = generateRandomNumber();

function askUser(message) {
  rl.question(`${message}\n> `, (userNumber) => {
    if (!checkIsValidUserInput(userNumber)) {
      askUser('Sorry, but your number is invalid! Let`s try again.');
    }

    const { cows, bulls } = getBullsAndCows(+userNumber, numberToGuess);

    if (bulls === 4) {
      rl.close();
      process.stdout.write('Good job! See you later!');

      return;
    }

    askUser(
      `Your result: ${bulls} bulls and ${cows} cows. Good job and try again!`,
    );
  });
}

askUser('What is your number?');
