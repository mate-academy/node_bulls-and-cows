'use strict';

const terminal = require('./inputAndOutput');

function checkNumber(number) {
  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      if (number[i] === number[j]) {
        return false;
      }
    }
  }

  return true;
}

const calculate = (
  programNumber,
  text = 'Enter a number of 4 different digits:\n'
) => {
  terminal.question(text, (userNumber) => {
    if (userNumber.length !== 4 || !checkNumber(userNumber)) {
      calculate(programNumber, '\nIncorrect number. Try again:\n');
    }

    if (programNumber === userNumber) {
      terminal.close();

      // eslint-disable-next-line no-console
      console.log('You won!');
    } else {
      let bullsCount = 0;
      let cowsCount = 0;

      for (let i = 0; i < programNumber.length; i++) {
        if (programNumber[i] === userNumber[i]) {
          bullsCount++;
        } else if (programNumber.includes(userNumber[i])) {
          cowsCount++;
        }
      }

      calculate(programNumber,
        `\n${bullsCount} bulls and ${cowsCount} cows. Try again:\n`);
    }
  });
};

module.exports = calculate;
