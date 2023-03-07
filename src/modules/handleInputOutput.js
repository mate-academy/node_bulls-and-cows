'use strict';

const readline = require('readline');

const handleInputOutput = () => {
  return new Promise(resolve => {
    const message = 'Insert 4  different digits: ';

    const terminal = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    global.console.log(message);

    terminal.on('line', (userNumber) => {
      const uniqNumbers = new Set(userNumber);

      if (userNumber.length !== 4) {
        global.console.log('Wrong number of digits - ' + message);
      } else if ([...uniqNumbers].length !== 4) {
        global.console.log('Digits should be uniq - ' + message);
      } else if (userNumber.length) {
        resolve(userNumber);
        terminal.close();
      }
    });
  });
};

exports.handleInputOutput = handleInputOutput;
