'use strict';
/* eslint-disable no-console */

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const secretNumber = generateRandomNumber();

console.log('Вгадай чсило!');

function ask() {
  rl.question('Введи число ', (input) => {
    if (!checkIsValidUserInput(input)) {
      console.log('Неправильний формат! Потрібно 4 різні цифри.');

      ask();

      return;
    }

    const { bulls, cows } = getBullsAndCows(input, secretNumber);

    console.log(`Bulls: ${bulls}, Cows: ${cows}`);

    if (bulls === 4) {
      console.log('Вітаю! Ти вгадав!');
      rl.close();
    } else {
      ask();
    }
  });
}

ask();
