'use strict';

const readline = require('readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function print(message) {
  terminal.write(`${message}\n`);
}

function ask(question, callback) {
  terminal.question(question, callback);
}

function closeTerminal() {
  terminal.close();
}

module.exports = {
  print,
  ask,
  closeTerminal,
};
