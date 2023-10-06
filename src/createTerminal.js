'use strict';

const readline = require('readline');

function createTerminal() {
  return readline.createInterface(
    process.stdin,
    process.stdout,
  );
};

module.exports = {
  createTerminal,
};
