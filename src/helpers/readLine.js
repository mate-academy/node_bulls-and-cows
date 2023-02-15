'use strict';

const readLine = require('readline');

const terminal = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

module.exports = {
  terminal,
};
