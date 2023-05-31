'use strict';

const readline = require('readline');
const getRandomNumber = require('./getRandomNumber');
const getHint = require('./getHint');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const puzzledStr = getRandomNumber();

const bullsCowsGame = () => {
  terminal.question('Please write your 4 different digits ', (userInput) => {
    const result = getHint(puzzledStr, userInput);

    terminal.write(result);

    if (result.includes('bulls: 4')) {
      terminal.write('You are winner!');
      terminal.close();
    }

    bullsCowsGame();
  });
};

bullsCowsGame();
