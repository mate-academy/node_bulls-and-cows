/* eslint-disable no-console */
'use strict';

const { terminal } = require('./terminal');
const { compareNumbers } = require('./compareNumbers');
const { randomNumber } = require('./generateNumber');
const { isValidInput } = require('./validInput');
const { messages } = require('./messages');

const number = randomNumber();
const {
  nameGame,
  wrongNNumber,
  winMessage,
  tryAgain,
} = messages;

console.log(nameGame);

const startGame = () => {
  console.log(number);

  terminal.question('> ', (input) => {
    if (!isValidInput(input)) {
      console.log(wrongNNumber);
      startGame();

      return;
    }

    const guess = input.split('').map(Number);
    const { bulls, cows } = compareNumbers(guess, number);

    if (bulls === 4) {
      console.log(winMessage);
      terminal.close();
    } else {
      console.log(`${bulls} bulls, ${cows} cows`);
      console.log(tryAgain);
      startGame();
    }
  });
};

startGame();
