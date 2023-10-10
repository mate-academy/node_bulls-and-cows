'use strict';
/* eslint-disable no-console */

const readline = require('readline');
const { getNumbWithRandomDigits } = require('./getNumbWithRandomDigits');
const { WINNING_STATUS } = require('./constants');
const { processUserGuess } = require('./processUserGuess');

function startGame(numberToGuess) {
  const randomNumber = numberToGuess || getNumbWithRandomDigits();
  const terminal = readline.createInterface(
    process.stdin,
    process.stdout,
  );

  terminal.question('Please input your 4 digit number: ', (number) => {
    terminal.close();

    if (number.length !== 4 || isNaN(+number)) {
      throw new Error('You should input 4 digits');
    }

    const guessRes = processUserGuess(randomNumber, +number);

    if (guessRes === WINNING_STATUS) {
      console.log('Congratulation you won!');
      console.log('The right number was: ', randomNumber);

      return;
    }

    console.log(guessRes);

    return startGame(randomNumber);
  });
};

module.exports = {
  startGame,
};
