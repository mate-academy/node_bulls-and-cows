/* eslint-disable no-console */
'use strict';

// Write your code here
const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const numberToGuess = String(generateRandomNumber());

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function playGame() {
  console.log('Вітаю у грі Bulls & Cows!');

  while (true) {
    const userInput = (await askQuestion('Введи 4 різні цифри: ')).trim();

    if (!checkIsValidUserInput(userInput)) {
      console.log(
        'Некоректний ввід. Потрібно 4 різні цифри, без 0 на початку.',
      );
      continue;
    }

    const { bulls, cows } = getBullsAndCows(userInput, numberToGuess);

    console.log(`Bulls: ${bulls}, Cows: ${cows}`);

    if (bulls === 4) {
      console.log('🎉 Вітаю, ти вгадав число!');
      break;
    }
  }

  rl.close();
}

playGame().catch((error) => {
  console.error('Сталася помилка:', error);
  rl.close();
});
