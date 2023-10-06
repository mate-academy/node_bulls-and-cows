'use strict';

const { getNumbWithRandomDigits } = require('./getNumbWithRandomDigits');
const { createTerminal } = require('./createTerminal');
const { WINNING_STATUS } = require('./constants');
const { processUserGuess } = require('./processUserGuess');

function startGame(numberToGuess) {
  const randomNumber = numberToGuess || getNumbWithRandomDigits();
  const terminal = createTerminal();

  terminal.question('Please input your 4 digit number: ', (number) => {
    terminal.close();

    if (number.length !== 4 || isNaN(+number)) {
      throw new Error('You should input 4 digits');
    }

    const guessRes = processUserGuess(randomNumber, +number);

    if (guessRes === WINNING_STATUS) {
      // eslint-disable-next-line
      console.log('Congratulation you won!');
      // eslint-disable-next-line
      console.log('The right number was: ', randomNumber);

      return;
    }

    // eslint-disable-next-line
    console.log(guessRes);

    return startGame(randomNumber);
  });
};

module.exports = {
  startGame,
};
