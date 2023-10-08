/* eslint-disable no-console */

'use strict';

const readline = require('readline');
const terminal = readline.createInterface(
  process.stdin,
  process.stdout
);

module.exports = { terminal };
