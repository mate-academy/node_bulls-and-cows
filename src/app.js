'use strict';

const readline = require('readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question('', () => {
  terminal.close();
});
