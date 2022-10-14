'use strict';

const readline = require('readline');
const { randomNumber } = require('./getRandomNumber');
const { bull } = require('./bull');
const { cow } = require('./cow');

// eslint-disable-next-line no-console
const log = console.log;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const startGame = () => {
  rl.question('Enter a number of 4 different digits: ', (enteredNumber) => {
    if (!/^(?:(\d)(?!.*\1)){4}$/.test(enteredNumber)) {
      log('The number must contain 4 different digits!');

      startGame();
    } else if (enteredNumber === randomNumber) {
      log(`You guessed the number`);
      rl.close();
    } else {
      log(`Bulls: ${bull(enteredNumber)}, Cows: ${cow(enteredNumber)}`);

      startGame();
    }
  });
};

startGame();
