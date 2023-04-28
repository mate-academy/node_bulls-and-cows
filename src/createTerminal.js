'use strict';

const readline = require('readline');

const createTerminal = () => (readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
);

module.exports = { createTerminal };
