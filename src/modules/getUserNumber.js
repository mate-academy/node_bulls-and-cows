/* eslint-disable no-console */
'use strict';

const readline = require('readline');

const terminal = readline.createInterface(process.stdin, process.stdout);

function isValidUserNumber(str) {
  if (isNaN(str)) {
    console.log('You need to use only the digits from 0 to 9');

    return;
  }

  if (str.length !== 4) {
    console.log('You need to enter 4 digits');

    return;
  }

  for (let i = 0; i < str.length; i++) {
    if (str.slice(i + 1).includes(str[i])) {
      console.log('Digits must be different');

      return;
    }
  }

  return true;
}

function getUserNumber() {
  return new Promise((resolve) => {
    terminal.question(
      'Please enter a number of 4 different digits: ',
      (str) => {
        terminal.close();

        if (isValidUserNumber(str)) {
          resolve(str);
        }
      }
    );
  });
}

module.exports = { getUserNumber };
