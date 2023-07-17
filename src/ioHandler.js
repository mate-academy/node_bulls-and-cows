'use strict';

function getUserInput(question) {
  const readline = require('readline');

  const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise(resolve => {
    const getInput = () => {
      terminal.question(question, (input) => {
        if (input.length !== 4) {
          // eslint-disable-next-line no-console
          console.log('Invalid number! Please enter a 4-digit number.');
          getInput();
        } else {
          terminal.close();
          resolve(input);
        }
      });
    };

    getInput();
  });
}

module.exports = getUserInput;
