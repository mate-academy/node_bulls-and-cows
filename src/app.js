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

const numberToGuess = generateRandomNumber();

function playGame() {
  rl.question('Введи чотиризначне число з різними цифрами: ', (userInput) => {
    const checkIsValid = checkIsValidUserInput(userInput);

    if (!checkIsValid) {
      console.log(
        'Некоректний ввід!' +
          'Переконайся, що число містить рівно 4 різні цифри.',
      );
      playGame();
    } else {
      const { bulls, cows } = getBullsAndCows(userInput, numberToGuess);

      console.log(`Бики: ${bulls}, Корови: ${cows}`);

      if (bulls === 4) {
        console.log('Вітаю! Ти вгадав число!');
        rl.close();
      } else {
        playGame();
      }
    }
  });
}

// Запуск гри
playGame();
