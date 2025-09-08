/* eslint-disable no-console */
'use strict';

// Write your code here
const readline = require('readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const secretNumber = generateRandomNumber();

console.log('Добро пожаловать в игру "Быки и Коровы"! 🎯');
console.log('Я загадал 4-значное число. Попробуй угадать!');

function askUser() {
  rl.question('Введи 4-значное число: ', (answer) => {
    if (!checkIsValidUserInput(answer)) {
      console.log(
        '❌ Неверный ввод! Введи 4 уникальные цифры, первая не может быть 0.',
      );

      return askUser();
    }

    const { bulls, cows } = getBullsAndCows(Number(answer), secretNumber);

    console.log(`Быки: ${bulls}, Коровы: ${cows}`);

    if (bulls === 4) {
      console.log(`🎉 Поздравляю! Ты угадал число ${secretNumber}!`);
      rl.close();
    } else {
      askUser();
    }
  });
}

askUser();
