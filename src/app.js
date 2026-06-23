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

function bullsAndCows() {
  rl.question('Введіть число: ', (answer) => {
    if (!checkIsValidUserInput(answer)) {
      // eslint-disable-next-line no-console
      console.log('Помилка при вводі');

      return bullsAndCows();
    }

    const { bulls, cows } = getBullsAndCows(answer, numberToGuess);

    // eslint-disable-next-line no-console
    console.log('Биків: ', bulls, 'Корів: ', cows);

    if (bulls === 4) {
      // eslint-disable-next-line no-console
      console.log('Ти переміг');

      rl.close();

      return;
    }

    bullsAndCows();
  });
}

bullsAndCows();
