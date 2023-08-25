'use strict';

const readline = require('readline');

const inputAndOutputOperations = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

module.exports = inputAndOutputOperations;
