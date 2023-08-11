'use strict';

const terminal = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askToGuess() {
  return new Promise((resolve) => {
    terminal.question('Please enter your guess numeber: ', (number) => {
      return resolve(number);
    });
  });
};

module.exports = {
  terminal,
  askToGuess,
};
