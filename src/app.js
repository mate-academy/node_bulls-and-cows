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

function playGame() {
  rl.question('Введи чотиризначне число з різними цифрами: \n', (userInput) => {
    const checkIsValid = checkIsValidUserInput(userInput);

    if (!checkIsValid) {
      rl.write(
        'Некоректний ввід! Переконайся, що число містить рівно 4 різні цифри.\n',
      );
      playGame();
    } else {
      const { bulls, cows } = getBullsAndCows(userInput, numberToGuess);

      rl.write(`Бики: ${bulls}, Корови: ${cows}\n`);

      if (bulls === 4) {
        rl.write('Вітаю! Ти вгадав число!');
        rl.close();
      } else {
        playGame();
      }
    }
  });
}

playGame();
