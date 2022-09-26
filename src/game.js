/* eslint-disable no-console */
'use strict';

const { exit } = require('process');
const readline = require('readline');
const { checkNumbers } = require('./checkNumbers');

let stateOfGame = {
  game: true,
  message: 'Try to guess the numbers ',
  userInput: '',
};

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function game() {
  terminal.question(stateOfGame.message, (input) => {
    stateOfGame.userInput = input;
    stateOfGame = checkNumbers(stateOfGame);

    if (!stateOfGame.game) {
      console.log(stateOfGame.message);
      terminal.close();
      exit();
    }

    game();
  });
};

module.exports = { game };
