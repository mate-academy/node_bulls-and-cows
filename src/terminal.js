'use strict';

const { stdout, stdin } = require('process');
const readline = require('readline');
const terminal = readline.createInterface({
  input: stdin,
  output: stdout,
});

module.exports = { terminal };
