'use strict';

const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getUserInput(message, callback) {
  rl.question(message, callback);
}

function showMessage(message) {
  process.stdout.write(`${message}\n`);
}

function closeInput() {
  rl.close();
}

module.exports = {
  getUserInput,
  showMessage,
  closeInput,
};
