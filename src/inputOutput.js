'use strict';

const readline = require('readline');

const inputFunction = (question, callback) => {
  const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  terminal.question(question, (input) => {
    terminal.close();
    callback(input);
  });
};

module.exports.inputFunction = inputFunction;
