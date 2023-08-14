'use strict';

const readline = require('readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askNumber = (callback) => {
  terminal.question('Please enter your number: ', (number) => {
    callback(number);
  });
};

const writeResult = (result) => {
  terminal.write(`${result}\n`);
};

const finishGame = () => {
  terminal.close();
};

module.exports = {
  askNumber,
  writeResult,
  finishGame,
};
