'use strict';

const readline = require('readline');

const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

module.exports = {
  userInterface,
};
