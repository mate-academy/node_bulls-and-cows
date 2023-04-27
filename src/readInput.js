'use strict';

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

function readInput() {
  return new Promise((resolve) => {
    readline.question('Enter your guess: ', (input) => {
      readline.close();
      resolve(input);
    });
  });
}

module.exports = { readInput };
