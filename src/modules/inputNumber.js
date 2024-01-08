/* eslint-disable no-console */
'use strict';

const readline = require('readline');

const getNumberFromUser = () => {
  const terminal = readline.createInterface(
    process.stdin,
    process.stdout
  );

  return new Promise((resolve) => {
    terminal.question('\x1b[36mYour number is: \x1b[0m', (number) => {
      terminal.close();

      for (let i = 0; i < number.length; i++) {
        if (isNaN(parseInt(number[i]))) {
          console.log('\x1b[31m%s\x1b[0m',
            'All digits must be numbers');
          getNumberFromUser().then(resolve);

          return;
        }
      }

      if (number.length !== 4) {
        console.log('\x1b[31m%s\x1b[0m',
          'The number must consists of 4 digits');
        getNumberFromUser().then(resolve);

        return;
      }

      for (let i = 0; i < number.length; i++) {
        if (number.slice(i + 1).includes(number[i])) {
          console.log('\x1b[31m%s\x1b[0m', 'Digits must be different');
          getNumberFromUser().then(resolve);

          return;
        }
      }

      resolve(number);
    });
  });
};

module.exports = {
  getNumberFromUser,
};
