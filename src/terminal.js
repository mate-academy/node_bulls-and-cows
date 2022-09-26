'use strict';

const readline = require('readline');

module.exports.terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
