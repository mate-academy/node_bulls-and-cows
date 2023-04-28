/* eslint-disable no-console */
'use strict';

const readline = require('readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const print = (message) => {
  console.log(message);
};

module.exports = {
  terminal,
  print,
};
