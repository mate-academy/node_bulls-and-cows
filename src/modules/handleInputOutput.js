'use strict';

const readline = require('readline');

const handleInputOutput = () => {
  return new Promise(resolve => {
    const message = 'Insert 4  different digits: ';

    const terminal = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    // eslint-disable-next-line no-console
    console.log(message);

    terminal.on('line', (UserNumber) => {
      const uniqNumbers = new Set(UserNumber.split('').map(num => +num));

      if (UserNumber.length > 4 || UserNumber.length < 4) {
        // eslint-disable-next-line no-console
        console.log('Wrong number of digits - ' + message);
      } else if ([...uniqNumbers].length !== 4) {
        // eslint-disable-next-line no-console
        console.log('Digits should be uniq - ' + message);
      } else if (UserNumber.length) {
        resolve(UserNumber);
        terminal.close();
      }
    });
  });
};

exports.handleInputOutput = handleInputOutput;
