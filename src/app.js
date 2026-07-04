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

const secret = generateRandomNumber();

const askGuess = () => {
  rl.question('Enter your guess (4 different digits): ', (guess) => {
    // Перевіряємо валідність вводу
    if (!checkIsValidUserInput(guess)) {
      console.log('Invalid input. Please enter exactly 4 unique digits.');

      return askGuess();
    }

    // Рахуємо биків та корів
    const result = getBullsAndCows(secret, guess);

    console.log(`Result: ${result.bulls} bulls, ${result.cows} cows`);

    // Перевіряємо умову перемоги
    if (result.bulls === 4) {
      console.log('Congratulations! You guessed the number!');
      rl.close();
    } else {
      askGuess(); // Запитуємо знову
    }
  });
};

// Запускаємо гру
askGuess();
