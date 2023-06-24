'use strict';

const readline = require('readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const print = (message) => {
  process.stdout.write(`${message}\n`);
};

module.exports = {
  terminal,
  print,
};
