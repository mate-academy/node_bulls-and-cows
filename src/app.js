'use strict';

const readline = require('readline');
const { generateNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');

const inputFunction = (question, callback) => {
  const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  terminal.question(question, (input) => {
    terminal.close();
    callback(input);
  });
};

const secretNumber = generateNumber();

function game() {
  inputFunction('Enter a 4-digit number: ', (guess) => {
    if (!checkIsValidUserInput(guess)) {
      game();

      return;
    }

    const result = getBullsAndCows(secretNumber, guess);

    if (!result.bulls === 4) {
      game();
    }
  });
}

game();
