'use strict';

const redline = require('readline');
const userTerminal = redline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

module.exports = { userTerminal };
