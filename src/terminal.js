'use strict';

const { createInterface } = require('readline');

const terminal = createInterface({
  input: process.stdin,
  output: process.stdout,
});

exports.terminal = terminal;
