/* eslint-disable no-console */
'use strict';

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const INCORRECT_INPUT_MESSAGE =
  'Вводити можна тільки 4 різні цифри. Будь ласка перевірь ввод.';

const WIN_MESSAGE = `Вітаю, ти відгадав число, сподіваюся це було не дуже просто :)
Поки ти радів перемозі, комп'ютер загадав нове число, можеш також спробувати відгадати його.
Також нагадую, щоб завершити гру достатньо ввести "-"\n`;

const LINE = '-'.repeat(70);

const rl = readline.createInterface({ input, output });

sayHi();

let guessNumber = generateRandomNumber();

rl.setPrompt('Чекаю число... ');
rl.prompt();

rl.on('line', (userInput) => {
  if (userInput === '-') {
    rl.close();

    return null;
  }

  const userInputIsValid = checkIsValidUserInput(userInput);

  if (!userInputIsValid) {
    console.log(INCORRECT_INPUT_MESSAGE);
    console.log(LINE);
    rl.prompt();

    return null;
  }

  const resultOfTheTest = getBullsAndCows(userInput, guessNumber);

  if (resultOfTheTest.bulls === 4) {
    console.log(WIN_MESSAGE);
    guessNumber = generateRandomNumber();
    rl.prompt();

    return null;
  }

  console.log(getResultMessage(resultOfTheTest));
  console.log(LINE);
  rl.prompt();
});

function getResultMessage(result) {
  const bulls = result.bulls;
  const cows = result.cows;

  return `Результат: бики - ${bulls}, корови - ${cows}. Можеш спробувати ще`;
}

function sayHi() {
  console.log('Привіт, вас вітає гра - "Бики та корови"');
  console.log("Комп'ютер зараз напружить процессор й загадає число...");
  console.log('٩(˘◡˘)۶');
  console.log('Готово!');
  console.log('До речі, якщо надоїсть просто введи "-"!');
  console.log(LINE);
}
