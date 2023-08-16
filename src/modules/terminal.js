'use strict';

const terminal = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

module.exports.terminal = terminal;
