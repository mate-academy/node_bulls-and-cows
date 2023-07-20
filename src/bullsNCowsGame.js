'use strict';

const readline = require('readline');
const { calculateBullsNCows } = require('./calculateBullsNCows');

const dialogInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const dialogMessage = {
  start: 'Enter 4 digit number: ',
  error: '\n** Your number is wrong, enter valid number! **\n\n',
  end: '\n## 4 Bulls, Well Done!! ##\n',
};

function isNumberValid(number) {
  if (Number.isInteger(+number)) {
    return new Set(number).size === 4;
  }

  return false;
}

function bullsNCowsGame(randomNumber) {
  dialogInterface.question(dialogMessage.start, (guessedNum) => {
    const isCorrectNumber = isNumberValid(guessedNum);

    if (!isCorrectNumber) {
      dialogInterface.write(dialogMessage.error);
      bullsNCowsGame(randomNumber);

      return 1;
    }

    const { bulls, cows } = calculateBullsNCows(randomNumber, guessedNum);

    if (bulls === 4) {
      dialogInterface.write(dialogMessage.end);
      dialogInterface.write(`The number was: ${randomNumber}`);
      dialogInterface.close();

      return 0;
    }

    dialogInterface.write(`\n Bulls: ${bulls}  Cows: ${cows}\n\n`);
    bullsNCowsGame(randomNumber);
  });
};

module.exports = { bullsNCowsGame };
