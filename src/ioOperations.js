'use strict';

const readline = require('readline');

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

module.exports = {
  getInput: async function() {
    return new Promise((resolve) => {
      terminal.question('Enter your guess: ', (answer) => {
        resolve(answer);
      });
    });
  },

  displayMessage: function(message) {
    // eslint-disable-next-line no-console
    console.log(message);
  },

  closeInterface: function() {
    terminal.close();
  },
};
