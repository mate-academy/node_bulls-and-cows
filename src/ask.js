'use strict';

const readline = require('readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getInput(message) {
  return new Promise(resolve => {
    terminal.question(message, input => {
      resolve(input);
    });
  });
}

function printOut(message) {
  global.console.log(message);
}

module.exports = {
  terminal,
  getInput,
  printOut,
};
