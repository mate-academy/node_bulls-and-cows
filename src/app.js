'use strict';

const readline = require('readline');
const getRandomNumber = require('./getRandomNumber');
const getHint = require('./getHint');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const puzzledStr = getRandomNumber();

const BullsCowsGame = () => {
  terminal.question('Please write your 4 different digits ', (userInput) => {
    const result = getHint(puzzledStr, userInput);

    // eslint-disable-next-line no-console
    console.log(result);

    if (result.includes('bulls: 4')) {
      // eslint-disable-next-line no-console
      console.log('You are winner!');
      terminal.close();
    } else {
      BullsCowsGame();
    }
  });
};

BullsCowsGame();
