'use strict';

const readline = require('readline');

const interfaceOfGame = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

module.exports = { interfaceOfGame };
