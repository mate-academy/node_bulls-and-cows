'use strict';

const readline = require('readline-sync');

function ioClient() {
  process.stdin.setEncoding('utf8');

  return readline.question('Guess a 4-digit number: ');
};

module.exports = {
  ioClient,
};
