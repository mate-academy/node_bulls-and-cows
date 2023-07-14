'use strict';

const readline = require('readline');
const numberGenerator = require('./numberGenerator.js');
const calculatingModule = require('./calculatingModule.js');
const validate = require('./validate.js');

const main = () => {
  const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const randomNumber = numberGenerator();
  const askANumber = (answer) => {
    const number = +answer;

    if (!validate(number)) {
      terminal.question('validate failed, enter 4 number digit', askANumber);
    }

    const result = calculatingModule(randomNumber, number);

    if (result) {
      // eslint-disable-next-line
      console.log('result:', result);
      terminal.question('guess digit: ', askANumber);
    } else {
      // eslint-disable-next-line
      console.log('You win!');
      terminal.close();
    }
  };

  terminal.question('guess 4 number digit: ', askANumber);
};

main();
