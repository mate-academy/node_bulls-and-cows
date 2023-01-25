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
      console.log('Wrong input!');
      numberIsCorrect = false;
      game(randomInput);
    }

    const animals = compareNumbers(randomInput, userInput);

    if (animals.bulls === 4) {
      console.log('Congratulations! You won!');
      terminal.close();
    } else if (numberIsCorrect) {
      console.log(`Bulls: ${animals.bulls} Cows: ${animals.cows}`);
      game(randomInput);
    }
  });
})(random);
