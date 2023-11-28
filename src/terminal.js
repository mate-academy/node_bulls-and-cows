'use strict';

const readline = require('node:readline');

const terminal = readline.createInterface(
  process.stdin,
  process.stdout,
);

module.exports = {
  terminal,
};
