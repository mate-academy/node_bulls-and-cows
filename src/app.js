/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

// Створюємо інтерфейс для введення/виведення
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Генеруємо випадкове число
const numberToGuess = generateRandomNumber();

console.log('Welcome to Bulls and Cows! Try to guess the 4-digit number.');

function playGame() {
  rl.question('Enter your guess: ', (userInput) => {
    // Перевіряємо валідність введення
    if (!checkIsValidUserInput(userInput)) {
      console.log(
        // eslint-disable-next-line max-len
        'Invalid input! Please enter a 4-digit number with unique digits, not starting with 0.',
      );
      playGame();

      return;
    }

    // Перетворюємо введення в число для порівняння
    const guess = Number(userInput);

    // Отримуємо бики і корови
    const { bulls, cows } = getBullsAndCows(guess, numberToGuess);

    console.log(`Result: ${bulls} bulls, ${cows} cows`);

    // Перевіряємо, чи виграв гравець
    if (bulls === 4) {
      console.log('Congratulations! You guessed the number!');
      rl.close();
    } else {
      playGame();
    }
  });
}

// Запускаємо гру
playGame();
