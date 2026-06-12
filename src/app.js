'use strict';

const readline = require('readline');

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const secretNumber = generateRandomNumber();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function playTurn() {
  rl.question('Введи свій варіант (4 унікальні цифри): ', (userInput) => {
    if (!checkIsValidUserInput(userInput)) {
      process.stdout.write(
        'Невалідний ввід! Число має бути 4-значним, ' +
          'без дублікатів і не починатися з 0.\n\n',
      );

      return playTurn();
    }

    const score = getBullsAndCows(userInput, secretNumber);

    if (score.bulls === 4) {
      process.stdout.write('Вітаю! Ти вгадала число! Перемога!\n');
      rl.close();
    } else {
      process.stdout.write(`Бики: ${score.bulls} | Корови: ${score.cows}\n\n`);
      playTurn();
    }
  });
}

playTurn();
