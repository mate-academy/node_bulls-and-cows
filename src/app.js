'use strict';
'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./generateRandomNumber');
const { checkIsValidUserInput } = require('./checkIsValidUserInput');
const { getBullsAndCows } = require('./getBullsAndCows');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numberToGuess = generateRandomNumber();

function ask() {
  rl.question('Введіть 4-значне число: ', (answer) => {
    if (!checkIsValidUserInput(answer)) {
      /* eslint-disable no-console */
      console.log('Невірний ввід. Спробуйте ще раз.');

      return ask();
    }

    const { bulls, cows } = getBullsAndCows(answer, numberToGuess);
    /* eslint-disable no-console */

    console.log(`Бики: ${bulls}, Корови: ${cows}`);

    if (bulls === 4) {
      /* eslint-disable no-console */
      console.log('🎉 Ви вгадали число!');
      rl.close();
    } else {
      ask();
    }
  });
}
/* eslint-disable no-console */
console.log('Гра "Bulls & Cows"');
ask();
