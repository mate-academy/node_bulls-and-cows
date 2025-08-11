/* eslint-disable max-len */
/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numberToGuess = generateRandomNumber();

console.log(
  'Гра почалась! Вгадай 4-значне число з унікальних цифр (перша не 0).',
);

function askQuestion() {
  rl.question('Введи своє число: ', (answer) => {
    if (!checkIsValidUserInput(answer)) {
      console.log(
        'Некоректне число! Воно має бути 4-значним, без повторів, не починатись з 0.',
      );

      return askQuestion();
    }

    const result = getBullsAndCows(answer, numberToGuess);

    console.log(`Bulls: ${result.bulls}, Cows: ${result.cows}`);

    if (result.bulls === 4) {
      console.log('Вітаю! Ти вгадав число!');
      rl.close();
    } else {
      askQuestion();
    }
  });
}

askQuestion();
