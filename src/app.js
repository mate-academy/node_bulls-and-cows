'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber.js');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput.js');
const { getBullsAndCows } = require('./modules/getBullsAndCows.js');

const terminal = readline.createInterface(
  process.stdin,

  process.stdout,
);

const secretNumber = generateRandomNumber();

function askUser() {
  terminal.question(
    `Комп'ютер загадав 4-значне число з різних цифр. Спробуйте його вгадати!`,
    (userNumber) => {
      if (!checkIsValidUserInput(userNumber)) {
        terminal.write(`Incorrect input! Try again.`);

        return askUser();
      }

      const result = getBullsAndCows(userNumber, secretNumber);

      terminal.write(`Bull: ${result.bulls}; Cow: ${result.cows}`);

      if (result.bulls === 4) {
        terminal.write(`Congratulations! You guessed the number!`);
        terminal.close();
      } else {
        askUser();
      }
    },
  );
}

askUser();
