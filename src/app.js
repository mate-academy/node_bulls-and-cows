'use strict';

const { generateNumber } = require('./generateNumber.js');
const { compareNumbers } = require('./calculateBullsAndCows');
const { terminal } = require('./terminal');

const random = generateNumber();

(function game(randomInput) {
  terminal.question('Please, enter the number: ', (userInput) => {
    let numberIsCorrect = true;
    const digits = userInput.split('');
    const invalidDigits = digits.some(num => isNaN(+num));
    const hasDuplicates = digits.some((e, i, arr) => arr.indexOf(e) !== i);

    if (digits.length !== 4
      || invalidDigits
      || hasDuplicates) {
      numberIsCorrect = false;
      terminal.close();

      return 'Wrong input!';
    }

    const animals = compareNumbers(randomInput, userInput);

    if (animals.bulls === 4) {
      terminal.close();

      return 'Congratulations! You won!';
    }

    if (numberIsCorrect) {
      terminal.close();

      return `Bulls: ${animals.bulls} Cows: ${animals.cows}`;
    }
  });
})(random);
