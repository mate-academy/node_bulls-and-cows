'use strict';

const readline = require('readline');
const { generateRandomNumber } = require('./modules/generateRandomNumber');
const { getBullsAndCows } = require('./modules/getBullsAndCows');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput');

const terminal = readline.createInterface(
  process.stdin,
  process.stdout
);

const generatedNum = generateRandomNumber();

const game = () => {
  terminal.question('Guess the number of 4 different digits',
    (userInput) => {
      if (checkIsValidUserInput(userInput)) {
        getBullsAndCows(+userInput, +generatedNum);
      }

      if (generatedNum === userInput) {
        terminal.close();
      } else {
        game();
      }
    });
};

game();
