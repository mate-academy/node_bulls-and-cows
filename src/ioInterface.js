'use strict';

const readline = require('readline');

const ioInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

module.exports = {
  ioInterface,
};
