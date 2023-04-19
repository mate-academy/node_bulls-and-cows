'use strict';

const readline = require('node:readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const closeTerminal = () => {
  return terminal.close();
};

module.exports = {
  terminal,
  closeTerminal,
};
