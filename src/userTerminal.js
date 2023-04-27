'use strict';

const readline = require('readline');

const userTerminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

module.exports = { userTerminal };
