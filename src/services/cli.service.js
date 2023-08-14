'use strict';

const readline = require('readline');

const cliService = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

module.exports = { cliService };
