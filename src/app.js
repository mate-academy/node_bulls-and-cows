/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('../src/modules/generateRandomNumber');
const { getBullsAndCows } = require('../src/modules/getBullsAndCows');
const {
  checkIsValidUserInput,
} = require('../src/modules/checkIsValidUserInput');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numberToGuess = generateRandomNumber();

function ask() {
  rl.question('Введи число: ', (answer) => {
    if (!checkIsValidUserInput(answer)) {
      console.log('Ти ввів неправильне число');

      return ask();
    }

    const userNumber = answer.split('').map(Number);

    const { bulls, cows } = getBullsAndCows(userNumber, numberToGuess);

    console.log(`Bulls: ${bulls}, Cows: ${cows}`);

    if (bulls === 4) {
      console.log('Ти виграв 🎉');
      rl.close();

      return;
    }

    ask();
  });
}

ask();
