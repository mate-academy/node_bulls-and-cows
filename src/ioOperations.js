'use strict';

const readline = require('readline');

function getUserInput(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise(resolve => {
    rl.question(question, answer => {
      rl.close();
      resolve(answer);
    });
  });
}

function displayMessage(message) {
  // eslint-disable-next-line no-console
  console.log(message);
}

module.exports = {
  getUserInput, displayMessage,
};
