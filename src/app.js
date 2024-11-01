'use strict';

const readline = require('node:readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput.js');
const { generateRandomNumber } = require('./modules/generateRandomNumber.js');
const { getBullsAndCows } = require('./modules/getBullsAndCows.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const print = (message) => rl.write(message + '\n');

const secretNumber = generateRandomNumber();

// Функція, яка запускає одну спробу гри
function playRound() {
  rl.question('Введіть ваше число: ', (guess) => {
    const validInput = checkIsValidUserInput(guess);

    if (!checkIsValidUserInput(guess)) {
      print('невалідне значення');
      playRound();
    }

    if (validInput && guess !== secretNumber.toString()) {
      const { bulls, cows } = getBullsAndCows(guess, secretNumber);

      print(`Бики: ${bulls}, Корови: ${cows}`);
      playRound(); // Запускаємо ще один раунд
    }

    if (guess === secretNumber.toString() && validInput) {
      print(`Вітаємо! Ви вгадали число ${secretNumber}!`);
      rl.close();
    }
  });
}

playRound();
