'use strict';

const { generateNumber } = require('./generateNumber.js');
const { compareNumbers } = require('./calculateBullsAndCows');
const { terminal } = require('./terminal');

const random = generateNumber();

(function game(randomInput) {
  terminal.question('Please, enter the number: ', (userInput) => {
    let numberIsCorrect = true;

    if ((userInput.length !== 4
      || userInput.split('').some(num => isNaN(+num))
      || userInput.split('').some((e, i, arr) => arr.indexOf(e) !== i))) {
      numberIsCorrect = false;
      terminal.close();

      return 'Wrong input!';
    }

    const animals = compareNumbers(randomInput, userInput);

    if (animals.bulls === 4) {
      terminal.close();

      return 'Congratulations! You won!';
    } else if (numberIsCorrect) {
      terminal.close();

      return `Bulls: ${animals.bulls} Cows: ${animals.cows}`;
    }
  });
})(random);
