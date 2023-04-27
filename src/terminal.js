'use strict';

const readline = require('readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (text, callback) => {
  terminal.question(text, callback);
};

const close = () => {
  terminal.close();
};

module.exports = {
  question,
  close,
};
