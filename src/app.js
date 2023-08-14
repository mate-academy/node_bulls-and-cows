/* eslint-disable no-console */
'use strict';

const { terminal } = require('./terminal');
const { calculator } = require('./calculator');
const { generator } = require('./generator');

const generatorNumber = generator();
let count = 0;

function askForNumbers() {
  terminal.question('Enter your numbers: ', (number) => {
    const uniqueNumber = [...new Set(Array.from(number))];
    const isNumberCorrect = number.length === 4
      && number.length === uniqueNumber.length;

    if (!isNumberCorrect) {
      console.error('Error! You must enter 4 unique numbers');
      terminal.close();

      return;
    }

    if (calculator(number, generatorNumber)) {
      console.log(`You guess all numbers. Right answer was ${generatorNumber}`);
      console.log(`In total you made ${count} attempts. Well done! :)`);
      terminal.close();

      return;
    }

    count += 1;
    console.log(`Try number: ${count}`);
    console.log('-------------------');
    askForNumbers();
  });
}

askForNumbers();
