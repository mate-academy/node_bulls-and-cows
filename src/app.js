'use strict';

const readline = require('readline');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const guessedNumber = generateRandomNumber();
let attempt = 0;

function askQuestion() {
  const prompt =
    attempt === 0
      ? 'Я загадав чотиризначне число. Спробуй відгадати!'
      : 'Спробуй ще: ';

  terminal.question(prompt, (answer) => {
    if (!checkIsValidUserInput(answer)) {
      process.stdout.write(
        'Помилка. Введи 4 різні цифри, перша не може бути 0.\n',
      );

      return askQuestion();
    }

    attempt++;

    const result = getBullsAndCows(answer, guessedNumber);

    process.stdout.write(`Бики: ${result.bulls}, Корови: ${result.cows}\n`);

    if (result.bulls === 4) {
      process.stdout.write(
        `Вітаю! Ти відгадав число ${guessedNumber} за ${attempt} спроб(и)!\n`,
      );
      terminal.close();
    } else {
      askQuestion();
    }
  });
}

askQuestion();
