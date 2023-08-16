/* eslint-disable no-console */
'use strict';

const terminal = require('./terminal').terminal;
const getRandom = require('./getRandomNumber');
const getGueses = require('./getBullsAndCows');
const randomNumber = getRandom.getRandomNumber();

function startGame() {
  terminal.question('Try to input for digit number: ', number => {
    const bulls = getGueses.getBullsAndCows(number, randomNumber);

    console.log(bulls);

    if (randomNumber !== number) {
      startGame();
    }

    if (randomNumber === number) {
      console.log('Well done, all bulls have been found');
      terminal.close();
    }
  });
}

module.exports.startGame = startGame;
