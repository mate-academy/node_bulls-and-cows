'use strict';

function getUserInput(question) {
  const readline = require('readline');
  const gameText = require('./constants.js');

  const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise(resolve => {
    const getInput = () => {
      terminal.question(question, (input) => {
        if (input.length !== 4) {
          // eslint-disable-next-line no-console
          console.log(gameText.invalidNum);
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
