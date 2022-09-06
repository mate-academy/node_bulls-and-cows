/* eslint-disable no-console */
'use strict';

const readline = require('readline');
const cowsAndBulls = require('./winConditions.js');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const gamePlay = (computerRandom) => {
  terminal.question('Write down random 4 digits number:\n', (userGuess) => {
    if (Number.isNaN(Number(userGuess))
      || userGuess.length === 0
      || userGuess.length > 4
    ) {
      console.log('please enter valid number');
      gamePlay(computerRandom);
    } else {
      cowsAndBulls(userGuess, computerRandom);
    }
  });
};

module.exports = gamePlay;
