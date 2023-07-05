'use strict';

const readline = require('readline');

const askForGuess = async() => {
  const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    terminal.question(
      'Guess a four-digit number with unique digits: ',
      (userInput) => {
        terminal.close();
        resolve(userInput);
      },
    );
  });
};

module.exports = {
  askForGuess,
};
