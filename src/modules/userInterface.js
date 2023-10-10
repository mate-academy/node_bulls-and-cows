'use strict';

const readline = require('readline');

const userInterface = readline.createInterface(
  process.stdin,
  process.stdout
);

module.exports = { userInterface };
