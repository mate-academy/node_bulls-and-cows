'use strict';

const readline = require('readline');

const gameTerminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

module.exports.gameTerminal = gameTerminal;
