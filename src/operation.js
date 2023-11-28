/* eslint-disable no-console */
'use strict';

const readline = require('readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getPersonNum(callback) {
  terminal.question('Guess a number?', (personNum) => {
    callback(personNum);
  });
}

function showResult(bulls, cows) {
  console.log(`Bulls: ${bulls}, Cows: ${cows}`);
}

function showGameEnd() {
  console.log('Congratulations! You guessed the number!');
  terminal.close();
}

module.exports = {
  getPersonNum,
  showResult,
  showGameEnd,
};
